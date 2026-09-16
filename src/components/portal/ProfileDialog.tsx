import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileDialog = ({ open, onOpenChange }: ProfileDialogProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("erickson@ayiti.io");
  const [phone, setPhone] = useState("+509 1234 5678");

  const handleSave = () => {
    // TODO: Save email and phone to backend
    toast({
      title: "Profile updated",
      description: "Your contact information has been updated successfully.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl">Profile Information</DialogTitle>
          <DialogDescription className="text-sm">
            View your government-verified information. Only email and phone can be updated.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-5 py-3">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl sm:text-3xl">
                E
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Read-only fields */}
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="fullname" className="text-muted-foreground text-xs sm:text-sm">
                Full Name
              </Label>
              <Input
                id="fullname"
                value="Erickson"
                readOnly
                disabled
                className="bg-muted cursor-not-allowed text-sm h-9"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="govnumber" className="text-muted-foreground text-xs sm:text-sm">
                Government ID Number
              </Label>
              <Input
                id="govnumber"
                value="HT-2025-****9493"
                readOnly
                disabled
                className="bg-muted cursor-not-allowed text-sm h-9"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="passport" className="text-muted-foreground text-xs sm:text-sm">
                Passport Number
              </Label>
              <Input
                id="passport"
                value="P****5678"
                readOnly
                disabled
                className="bg-muted cursor-not-allowed text-sm h-9"
              />
            </div>
          </div>

          {/* Editable fields */}
          <div className="space-y-3 pt-3 border-t">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="text-sm h-9"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+509 1234 5678"
                className="text-sm h-9"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-3">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleSave} className="w-full sm:w-auto">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
