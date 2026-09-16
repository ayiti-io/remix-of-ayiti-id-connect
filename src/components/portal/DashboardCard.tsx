import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Square, MoreVertical } from "lucide-react";
import TileGrid from "./TileGrid";
import SessionFooter from "./SessionFooter";

const DashboardCard = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Government services</h1>
            <p className="text-sm text-muted-foreground mt-1">Apply or manage your requests</p>
          </div>
          <div className="flex gap-2" aria-label="Quick actions">
            <Button variant="ghost" size="icon" title="Toggle view">
              <Square className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="More">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <TileGrid />
        <div className="md:hidden">
          <SessionFooter />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
