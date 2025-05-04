
import { LucideIcon } from "lucide-react";

export interface ConciergeService {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  link: string;
  ownershipNote?: string | null;
  isFavorite: boolean;
  recentlyUsed: boolean;
}
