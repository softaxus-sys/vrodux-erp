import {
  Activity, ArrowLeftRight, BadgeCheck, Banknote, BarChart3, BedDouble, BookOpen, Boxes, Briefcase, Building2,
  CalendarCheck, CalendarDays, CheckCircle2, ClipboardCheck, ClipboardList, Clock, Cloud, Coins, CreditCard,
  FileCheck, FilePlus, FileText, Flame, Globe2, GitMerge, Hammer, Handshake, Inbox, Key, KeyRound, Landmark,
  Layers, ListChecks, Mail, MapPin, MessageSquare, Package, PackageCheck, Paperclip, Percent, PhoneCall,
  Plane, Plug, Receipt, RefreshCcw, Rocket, Route, Scale, ScanBarcode, Search, Send, Settings2, Ship,
  ShieldCheck, ShoppingCart, Sparkles, Stamp, Store, Tag, Target, Timer, Trophy, Truck, UserPlus, UserRound,
  Users, Wallet, Warehouse, Wifi, Wrench, Zap, UtensilsCrossed, ChefHat, Kanban, Bell, Smartphone, Lock,
  GraduationCap, Stethoscope, ShieldPlus, FolderOpen, Fingerprint, Calculator, Factory, Library, Home,
  type LucideIcon,
} from "lucide-react";

/** Icons usable from content data by name. Add here when a new module needs one. */
export const ICONS = {
  Activity, ArrowLeftRight, BadgeCheck, Banknote, BarChart3, BedDouble, BookOpen, Boxes, Briefcase, Building2,
  CalendarCheck, CalendarDays, CheckCircle2, ClipboardCheck, ClipboardList, Clock, Cloud, Coins, CreditCard,
  FileCheck, FilePlus, FileText, Flame, Globe2, GitMerge, Hammer, Handshake, Inbox, Key, KeyRound, Landmark,
  Layers, ListChecks, Mail, MapPin, MessageSquare, Package, PackageCheck, Paperclip, Percent, PhoneCall,
  Plane, Plug, Receipt, RefreshCcw, Rocket, Route, Scale, ScanBarcode, Search, Send, Settings2, Ship,
  ShieldCheck, ShoppingCart, Sparkles, Stamp, Store, Tag, Target, Timer, Trophy, Truck, UserPlus, UserRound,
  Users, Wallet, Warehouse, Wifi, Wrench, Zap, UtensilsCrossed, ChefHat, Kanban, Bell, Smartphone, Lock,
  GraduationCap, Stethoscope, ShieldPlus, FolderOpen, Fingerprint, Calculator, Factory, Library, Home,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function iconByName(name: IconName): LucideIcon {
  return ICONS[name];
}

/** Picks a sensible icon for a feature-group title; used for content parsed from the module docs. */
const RULES: [RegExp, IconName][] = [
  [/lead|prospect|find|reveal/i, "Target"],
  [/pipeline|opportunit|board|kanban|sprint/i, "Kanban"],
  [/account|contact|customer|member|guest|tenant|vendor|part(y|ies)/i, "Users"],
  [/activit|timeline|note|comment/i, "Activity"],
  [/quotation|quote|proposal/i, "FileText"],
  [/document|file|attach|checklist/i, "Paperclip"],
  [/team|visibility|access|permission|role|login|logins/i, "ShieldCheck"],
  [/integration|source|api|portal feed|channel/i, "Plug"],
  [/report|dashboard|analytic|yield/i, "BarChart3"],
  [/invoice|billing|bill\b|bills|receipt|folio/i, "Receipt"],
  [/expense|payment|credit|fine|cash|wallet/i, "Wallet"],
  [/bank|reconcil/i, "Landmark"],
  [/journal|ledger|accounting|chart/i, "Calculator"],
  [/tax|vat|duty/i, "Percent"],
  [/currency|exchange|cost|landed/i, "Coins"],
  [/employee|staff|recruit|hiring/i, "UserRound"],
  [/attendance|time|office|shift|hours/i, "Clock"],
  [/leave|calendar|schedule|departure|rent|renew|reservation|reminder/i, "CalendarDays"],
  [/payroll|salary|wps/i, "Banknote"],
  [/stock|inventory|product|catalogue|item|goods|copy|copies/i, "Boxes"],
  [/warehouse|branch/i, "Warehouse"],
  [/transfer|movement|transit/i, "ArrowLeftRight"],
  [/order|purchase|sales order|sell|sale/i, "ShoppingCart"],
  [/deliver|rider|shipment|cargo|container|circulation|lending/i, "Truck"],
  [/room|housekeeping|front desk/i, "BedDouble"],
  [/menu|kitchen|dish|table|floor/i, "UtensilsCrossed"],
  [/route|bom|production|work centre|routing|manufactur/i, "Factory"],
  [/mail|email|campaign|inbox|outreach/i, "Mail"],
  [/notification|alert/i, "Bell"],
  [/mobile|app|desktop|pwa/i, "Smartphone"],
  [/security|2fa|two-factor|session|device/i, "Lock"],
  [/assistant|ai|tool|chat/i, "Sparkles"],
  [/import|export|bulk|sheet/i, "FilePlus"],
  [/master|setting|configur/i, "Settings2"],
];
const FALLBACKS: IconName[] = ["CheckCircle2", "Layers", "Zap", "ListChecks", "BadgeCheck", "Rocket"];

export function iconForTitle(title: string, index = 0): LucideIcon {
  for (const [re, name] of RULES) if (re.test(title)) return ICONS[name];
  return ICONS[FALLBACKS[index % FALLBACKS.length]];
}
