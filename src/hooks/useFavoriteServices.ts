import { useState, useEffect } from "react";

const STORAGE_KEY = "ayiti_favorite_services";
const MAX_FAVORITES = 6;

export const useFavoriteServices = () => {
  const [favoriteServices, setFavoriteServices] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavoriteServices(parsed.slice(0, MAX_FAVORITES));
        }
      }
    } catch (error) {
      console.error("Error loading favorite services:", error);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteServices));
    } catch (error) {
      console.error("Error saving favorite services:", error);
    }
  }, [favoriteServices]);

  const addFavorite = (serviceId: string) => {
    setFavoriteServices(prev => {
      if (prev.includes(serviceId)) return prev;
      if (prev.length >= MAX_FAVORITES) return prev;
      return [...prev, serviceId];
    });
  };

  const removeFavorite = (serviceId: string) => {
    setFavoriteServices(prev => prev.filter(id => id !== serviceId));
  };

  const isFavorite = (serviceId: string) => {
    return favoriteServices.includes(serviceId);
  };

  const canAddMore = favoriteServices.length < MAX_FAVORITES;

  return {
    favoriteServices,
    addFavorite,
    removeFavorite,
    isFavorite,
    canAddMore,
    maxFavorites: MAX_FAVORITES,
  };
};
