"use client";

import * as React from "react";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Briefcase,
  DollarSign,
  Target,
  GraduationCap,
  BarChart3,
  Settings,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User,
  Building2,
  Clock,
  TrendingUp,
  TrendingDown,
  UserPlus,
  FileText,
  Award,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MoreHorizontal,
  Plus,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  BadgeCheck,
  Timer,
  Coffee,
  Plane,
  Heart,
  Baby,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Menu,
  Moon,
  Sun,
  Globe,
  Zap,
  Activity,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  ArrowUpRight,
  ArrowDownRight,
  Users2,
  UserCheck,
  UserX,
  Calendar,
  FileCheck,
  ClipboardList,
  MessageSquare,
  Send,
  Image as ImageIcon,
  Video,
  Mic,
  Paperclip,
  Smile,
  Star,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Share2,
  Printer,
  RefreshCw,
  Maximize2,
  Minimize2,
  Copy,
  ExternalLink,
  Shield,
  Key,
  Lock,
  Unlock,
  Fingerprint,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Cpu,
  HardDrive,
  Server,
  Database,
  Cloud,
  CloudRain,
  Sun as SunIcon,
  CloudSun,
  Thermometer,
  Droplets,
  Wind,
  Eye as EyeIcon,
  EyeOff,
  RefreshCcw,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Settings2,
  HelpCircle,
  Info,
  AlertTriangle,
  Check,
  X,
  Minus,
  PlusCircle,
  MinusCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Move,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Layers,
  Grid,
  List,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Pentagon,
  Brain,
  Robot,
  Bot,
  Cpu as AiCpu,
  Wand2,
  Lightbulb,
  Flame,
  Rocket,
  Crown,
  Trophy,
  Medal,
  Gift,
  Gem,
  Diamond as DiamondIcon,
  Coins,
  Wallet,
  PiggyBank,
  CreditCard,
  Receipt,
  Calculator,
  Percent,
  TrendingFlat,
  Activity as ActivityIcon,
  Pulse,
  Radio,
  Signal,
  Broadcast,
  Wifi as WifiIcon,
  Bluetooth,
  Usb,
  Plug,
  Power,
  SwitchCamera,
  Camera,
  Scan,
  ScanFace,
  QrCode,
  Barcode,
  Fingerprint as FingerprintIcon,
  ScanLine,
  GanttChart,
  Kanban,
  Trello,
  Figma,
  PenTool,
  Brush,
  Paintbrush,
  Palette,
  ColorSwatch,
  Droplet,
  Contrast,
  Highlighter,
  Eraser,
  Move3d,
  Rotate3d,
  Scale3d,
  Cuboid,
  Box,
  BoxSelect,
  Layers2,
  StackedBarChart,
  AreaChart as AreaChartIcon,
  PieChart as PieChartIcon2,
  DonutChart,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger as SidebarTriggerButton,
} from "@/components/ui/sidebar";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  Legend, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ComposedChart,
  Scatter,
  ZAxis,
  Tooltip,
  Treemap,
  Sankey,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip as TooltipComponent, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";

// ============================================
// ADVANCED ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.85 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
  hover: { 
    scale: 1.02, 
    y: -8, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3, ease: "easeOut" } 
  },
};

const glassCardHover = {
  rest: { 
    scale: 1, 
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  hover: { 
    scale: 1.01, 
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transition: { duration: 0.3 } 
  },
};

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(var(--primary), 0.4)",
      "0 0 0 15px rgba(var(--primary), 0)",
      "0 0 0 0 rgba(var(--primary), 0)",
    ],
  },
};

// ============================================
// ADVANCED CHART DATA
// ============================================
const COLORS = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  accent: "hsl(var(--accent))",
  success: "hsl(var(--success))",
  warning: "hsl(var(--warning))",
  destructive: "hsl(var(--destructive))",
  info: "hsl(var(--info))",
  chart1: "hsl(var(--chart-1))",
  chart2: "hsl(var(--chart-2))",
  chart3: "hsl(var(--chart-3))",
  chart4: "hsl(var(--chart-4))",
  chart5: "hsl(var(--chart-5))",
};

// ============================================
// TYPES
// ============================================
type ActiveView = 
  | "dashboard" 
  | "employees" 
  | "attendance" 
  | "recruitment" 
  | "payroll" 
  | "performance" 
  | "training" 
  | "analytics" 
  | "settings"
  | "self-service"
  | "communication"
  | "wellness"
  | "workflows"
  | "ai-assistant";

interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  status: "active" | "on_leave" | "terminated" | "resigned";
  joinDate: string;
  avatar?: string;
  salary: number;
  skills?: string[];
  performance?: number;
  manager?: string;
  location?: string;
  timezone?: string;
  workMode?: "office" | "remote" | "hybrid";
  wellnessScore?: number;
  engagementScore?: number;
  learningProgress?: number;
  goalsCompleted?: number;
  aiMatchScore?: number;
}

interface AIInsight {
  id: string;
  type: "prediction" | "recommendation" | "alert" | "opportunity";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  category: string;
  confidence: number;
  actionable: boolean;
}

interface Workflow {
  id: string;
  name: string;
  status: "active" | "paused" | "draft";
  trigger: string;
  actions: number;
  lastRun: string;
  successRate: number;
}

// ============================================
// ENHANCED MOCK DATA
// ============================================
const mockEmployees: Employee[] = [
  { 
    id: "1", employeeId: "EMP001", firstName: "John", lastName: "Smith", email: "john.smith@company.com", 
    phone: "+1 234-567-8901", department: "Engineering", designation: "Senior Developer", status: "active", 
    joinDate: "2022-03-15", salary: 85000, skills: ["React", "Node.js", "TypeScript", "AWS"],
    performance: 92, manager: "Lisa Martinez", location: "New York", timezone: "EST", workMode: "hybrid",
    wellnessScore: 85, engagementScore: 90, learningProgress: 78, goalsCompleted: 12, aiMatchScore: 95
  },
  { 
    id: "2", employeeId: "EMP002", firstName: "Sarah", lastName: "Johnson", email: "sarah.j@company.com", 
    phone: "+1 234-567-8902", department: "Marketing", designation: "Marketing Manager", status: "active", 
    joinDate: "2021-07-20", salary: 92000, skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    performance: 88, manager: "Daniel Anderson", location: "Remote", timezone: "PST", workMode: "remote",
    wellnessScore: 92, engagementScore: 88, learningProgress: 65, goalsCompleted: 8, aiMatchScore: 88
  },
  { 
    id: "3", employeeId: "EMP003", firstName: "Michael", lastName: "Brown", email: "michael.b@company.com", 
    phone: "+1 234-567-8903", department: "Sales", designation: "Sales Executive", status: "active", 
    joinDate: "2023-01-10", salary: 65000, skills: ["B2B Sales", "Negotiation", "CRM", "Presentation"],
    performance: 78, manager: "Daniel Anderson", location: "Chicago", timezone: "CST", workMode: "office",
    wellnessScore: 75, engagementScore: 82, learningProgress: 90, goalsCompleted: 5, aiMatchScore: 72
  },
  { 
    id: "4", employeeId: "EMP004", firstName: "Emily", lastName: "Davis", email: "emily.d@company.com", 
    phone: "+1 234-567-8904", department: "HR", designation: "HR Specialist", status: "on_leave", 
    joinDate: "2022-09-05", salary: 58000, skills: ["Recruitment", "Employee Relations", "HRIS", "Compliance"],
    performance: 85, manager: "Daniel Anderson", location: "New York", timezone: "EST", workMode: "hybrid",
    wellnessScore: 88, engagementScore: 85, learningProgress: 70, goalsCompleted: 10, aiMatchScore: 90
  },
  { 
    id: "5", employeeId: "EMP005", firstName: "David", lastName: "Wilson", email: "david.w@company.com", 
    phone: "+1 234-567-8905", department: "Finance", designation: "Financial Analyst", status: "active", 
    joinDate: "2022-11-22", salary: 72000, skills: ["Financial Modeling", "Excel", "SAP", "Budgeting"],
    performance: 90, manager: "Daniel Anderson", location: "New York", timezone: "EST", workMode: "office",
    wellnessScore: 78, engagementScore: 92, learningProgress: 85, goalsCompleted: 15, aiMatchScore: 85
  },
  { 
    id: "6", employeeId: "EMP006", firstName: "Jessica", lastName: "Taylor", email: "jessica.t@company.com", 
    phone: "+1 234-567-8906", department: "Engineering", designation: "UI/UX Designer", status: "active", 
    joinDate: "2023-04-18", salary: 68000, skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    performance: 94, manager: "John Smith", location: "Remote", timezone: "MST", workMode: "remote",
    wellnessScore: 95, engagementScore: 96, learningProgress: 88, goalsCompleted: 18, aiMatchScore: 98
  },
  { 
    id: "7", employeeId: "EMP007", firstName: "Daniel", lastName: "Anderson", email: "daniel.a@company.com", 
    phone: "+1 234-567-8907", department: "Operations", designation: "Operations Manager", status: "active", 
    joinDate: "2021-02-28", salary: 95000, skills: ["Operations", "Process Improvement", "Team Leadership", "Agile"],
    performance: 96, manager: "CEO", location: "New York", timezone: "EST", workMode: "hybrid",
    wellnessScore: 82, engagementScore: 94, learningProgress: 72, goalsCompleted: 22, aiMatchScore: 92
  },
  { 
    id: "8", employeeId: "EMP008", firstName: "Lisa", lastName: "Martinez", email: "lisa.m@company.com", 
    phone: "+1 234-567-8908", department: "Engineering", designation: "Tech Lead", status: "active", 
    joinDate: "2020-08-14", salary: 110000, skills: ["System Design", "Python", "Go", "Kubernetes"],
    performance: 98, manager: "Daniel Anderson", location: "New York", timezone: "EST", workMode: "hybrid",
    wellnessScore: 88, engagementScore: 98, learningProgress: 95, goalsCompleted: 25, aiMatchScore: 99
  },
];

const aiInsights: AIInsight[] = [
  {
    id: "1",
    type: "prediction",
    title: "Flight Risk Alert: 3 Employees",
    description: "AI predicts 3 employees may leave within 60 days based on engagement patterns",
    impact: "high",
    category: "Retention",
    confidence: 87,
    actionable: true,
  },
  {
    id: "2",
    type: "recommendation",
    title: "Optimize Team Structure",
    description: "Restructuring Engineering team could improve productivity by 23%",
    impact: "high",
    category: "Productivity",
    confidence: 92,
    actionable: true,
  },
  {
    id: "3",
    type: "opportunity",
    title: "Skill Gap Identified",
    description: "5 employees ready for AI/ML training based on current skill trajectory",
    impact: "medium",
    category: "Learning",
    confidence: 78,
    actionable: true,
  },
  {
    id: "4",
    type: "alert",
    title: "Compliance Update Required",
    description: "12 employees need mandatory compliance training by end of month",
    impact: "high",
    category: "Compliance",
    confidence: 100,
    actionable: true,
  },
];

const workflows: Workflow[] = [
  { id: "1", name: "New Employee Onboarding", status: "active", trigger: "Employee Created", actions: 12, lastRun: "2 hours ago", successRate: 98 },
  { id: "2", name: "Leave Approval Workflow", status: "active", trigger: "Leave Request", actions: 5, lastRun: "30 mins ago", successRate: 100 },
  { id: "3", name: "Performance Review Cycle", status: "paused", trigger: "Quarterly", actions: 8, lastRun: "3 months ago", successRate: 95 },
  { id: "4", name: "Payroll Processing", status: "active", trigger: "Monthly", actions: 15, lastRun: "5 days ago", successRate: 100 },
];

const departmentData = [
  { name: "Engineering", count: 45, fill: COLORS.chart1, budget: 450000, spent: 380000, growth: 12 },
  { name: "Marketing", count: 25, fill: COLORS.chart2, budget: 250000, spent: 220000, growth: 8 },
  { name: "Sales", count: 35, fill: COLORS.chart3, budget: 350000, spent: 310000, growth: 15 },
  { name: "HR", count: 15, fill: COLORS.chart4, budget: 150000, spent: 120000, growth: 5 },
  { name: "Finance", count: 20, fill: COLORS.chart5, budget: 200000, spent: 180000, growth: 3 },
];

const attendanceData = [
  { month: "Jul", present: 92, absent: 5, late: 3, overtime: 12, productivity: 88 },
  { month: "Aug", present: 92, absent: 5, late: 3, overtime: 12, productivity: 90 },
  { month: "Sep", present: 95, absent: 3, late: 2, overtime: 8, productivity: 92 },
  { month: "Oct", present: 88, absent: 8, late: 4, overtime: 15, productivity: 85 },
  { month: "Nov", present: 91, absent: 6, late: 3, overtime: 10, productivity: 89 },
  { month: "Dec", present: 89, absent: 7, late: 4, overtime: 18, productivity: 86 },
  { month: "Jan", present: 94, absent: 4, late: 2, overtime: 6, productivity: 94 },
];

const recruitmentFunnel = [
  { stage: "Applications", value: 156, fill: COLORS.chart2 },
  { stage: "Screening", value: 89, fill: COLORS.chart3 },
  { stage: "Interview", value: 45, fill: COLORS.chart4 },
  { stage: "Offer", value: 18, fill: COLORS.chart5 },
  { stage: "Hired", value: 12, fill: COLORS.chart1 },
];

const payrollData = [
  { month: "Jul", amount: 445000, bonus: 20000, deductions: 42000, tax: 89000 },
  { month: "Aug", amount: 450000, bonus: 25000, deductions: 45000, tax: 91000 },
  { month: "Sep", amount: 465000, bonus: 30000, deductions: 48000, tax: 94000 },
  { month: "Oct", amount: 448000, bonus: 20000, deductions: 42000, tax: 90000 },
  { month: "Nov", amount: 472000, bonus: 35000, deductions: 50000, tax: 96000 },
  { month: "Dec", amount: 485000, bonus: 50000, deductions: 55000, tax: 100000 },
  { month: "Jan", amount: 492000, bonus: 28000, deductions: 47000, tax: 99000 },
];

const wellnessData = [
  { category: "Physical", score: 82, trend: "up" },
  { category: "Mental", score: 78, trend: "stable" },
  { category: "Social", score: 85, trend: "up" },
  { category: "Financial", score: 72, trend: "up" },
  { category: "Career", score: 88, trend: "up" },
];

const engagementTrend = [
  { week: "W1", score: 82, responses: 156 },
  { week: "W2", score: 84, responses: 162 },
  { week: "W3", score: 81, responses: 148 },
  { week: "W4", score: 87, responses: 170 },
  { week: "W5", score: 89, responses: 175 },
  { week: "W6", score: 88, responses: 168 },
];

const chartConfig = {
  present: { label: "Present", color: COLORS.chart1 },
  absent: { label: "Absent", color: COLORS.destructive },
  late: { label: "Late", color: COLORS.warning },
  productivity: { label: "Productivity", color: COLORS.info },
  amount: { label: "Amount", color: COLORS.primary },
  bonus: { label: "Bonus", color: COLORS.chart4 },
  deductions: { label: "Deductions", color: COLORS.chart3 },
  score: { label: "Score", color: COLORS.primary },
  responses: { label: "Responses", color: COLORS.chart2 },
  value: { label: "Value", color: COLORS.chart1 },
} satisfies ChartConfig;

// ============================================
// CUSTOM HOOKS
// ============================================
function useAnimatedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startValue = 0;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.round(startValue + (end - startValue) * progress);
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [end, duration]);
  
  return count;
}

// ============================================
// MAIN APPLICATION V3
// ============================================
export default function CQubePeopleV3() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const { toast } = useToast();
  const controls = useAnimation();

  // Initial loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Page transition
  useEffect(() => {
    controls.start("animate");
  }, [activeView, controls]);

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null, color: "text-primary", section: "main" },
    { id: "employees", label: "People", icon: Users, badge: "248", color: "text-chart-1", section: "main" },
    { id: "attendance", label: "Time & Attendance", icon: CalendarDays, badge: "3", color: "text-chart-2", section: "main" },
    { id: "recruitment", label: "Talent Acquisition", icon: Briefcase, badge: "15", color: "text-chart-3", section: "main" },
    { id: "payroll", label: "Compensation", icon: DollarSign, badge: null, color: "text-chart-4", section: "main" },
    { id: "performance", label: "Performance", icon: Target, badge: null, color: "text-chart-5", section: "manage" },
    { id: "training", label: "Learning Hub", icon: GraduationCap, badge: "4", color: "text-info", section: "manage" },
    { id: "wellness", label: "Wellness", icon: Heart, badge: null, color: "text-destructive", section: "manage" },
    { id: "workflows", label: "Automations", icon: Zap, badge: "2", color: "text-warning", section: "manage" },
    { id: "analytics", label: "Analytics", icon: BarChart3, badge: null, color: "text-success", section: "insights" },
    { id: "ai-assistant", label: "AI Assistant", icon: Brain, badge: "New", color: "text-primary", section: "insights" },
    { id: "settings", label: "Settings", icon: Settings, badge: null, color: "text-muted-foreground", section: "admin" },
  ];

  const renderContent = () => {
    const content = (() => {
      switch (activeView) {
        case "dashboard": return <DashboardV3 />;
        case "employees": return <EmployeesV3 />;
        case "attendance": return <AttendanceV3 />;
        case "recruitment": return <RecruitmentV3 />;
        case "payroll": return <PayrollV3 />;
        case "performance": return <PerformanceV3 />;
        case "training": return <TrainingV3 />;
        case "wellness": return <WellnessV3 />;
        case "workflows": return <WorkflowsV3 />;
        case "analytics": return <AnalyticsV3 />;
        case "ai-assistant": return <AIAssistantView />;
        case "settings": return <SettingsV3 />;
        default: return <DashboardV3 />;
      }
    })();

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    );
  };

  // Advanced Loading Screen
  if (isLoading) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center bg-background", isDarkMode && "dark")}>
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo */}
          <motion.div className="relative">
            <motion.div
              className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground font-bold text-3xl shadow-2xl"
              animate={{ 
                rotate: [0, 360],
                borderRadius: ["30%", "50%", "30%"],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                CQ
              </motion.span>
            </motion.div>
            
            {/* Orbital rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ 
                  scale: [1, 1.5 + i * 0.3],
                  opacity: [0.5, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Title */}
          <div className="flex flex-col items-center gap-3">
            <motion.h1 
              className="text-4xl font-bold bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              CQube People
            </motion.h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <span>Enterprise AI Platform V3</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 space-y-2">
            <motion.div
              className="h-2 bg-muted rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-chart-2 to-chart-3"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div 
              className="text-center text-sm text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Initializing AI systems...
            </motion.div>
          </div>

          {/* Loading Steps */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            {[
              { text: "Loading employee data", delay: 0.2 },
              { text: "Initializing AI models", delay: 0.5 },
              { text: "Connecting real-time services", delay: 0.8 },
              { text: "Preparing dashboard", delay: 1.1 },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.delay }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: step.delay + 0.3 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </motion.div>
                <span>{step.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-background", isDarkMode && "dark")}>
      <SidebarProvider defaultOpen={true}>
        <Sidebar variant="sidebar" collapsible="icon" className="border-r border-border/50">
          {/* Sidebar Header */}
          <SidebarHeader className="border-b border-border/50 p-4">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.div 
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-lg shadow-lg ring-2 ring-primary/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
                  CQube People
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Brain className="h-3 w-3 text-primary animate-pulse" />
                  AI-Powered V3
                </span>
              </div>
            </motion.div>
          </SidebarHeader>

          {/* Sidebar Navigation */}
          <SidebarContent className="p-2">
            {/* Main Section */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs text-muted-foreground/70 px-2 mb-1 flex items-center gap-2">
                <Zap className="h-3 w-3" />
                Core
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.filter(item => item.section === "main").map((item, index) => (
                    <SidebarMenuItem key={item.id}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <SidebarMenuButton
                          isActive={activeView === item.id}
                          onClick={() => setActiveView(item.id as ActiveView)}
                          tooltip={item.label}
                          className={cn(
                            "w-full relative overflow-hidden group transition-all duration-300",
                            activeView === item.id && "bg-primary/10 text-primary font-medium shadow-sm"
                          )}
                        >
                          <motion.div
                            className={cn("h-4 w-4", item.color)}
                            whileHover={{ rotate: 15, scale: 1.1 }}
                          >
                            <item.icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.label}</span>
                          {item.badge && (
                            <motion.span
                              className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                          {activeView === item.id && (
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-chart-3 rounded-r-full"
                              layoutId="activeNav"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </SidebarMenuButton>
                      </motion.div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* Management Section */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs text-muted-foreground/70 px-2 mb-1 flex items-center gap-2">
                <Target className="h-3 w-3" />
                Manage
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.filter(item => item.section === "manage").map((item, index) => (
                    <SidebarMenuItem key={item.id}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 5) * 0.03 }}
                      >
                        <SidebarMenuButton
                          isActive={activeView === item.id}
                          onClick={() => setActiveView(item.id as ActiveView)}
                          tooltip={item.label}
                          className={cn(
                            "w-full relative overflow-hidden group",
                            activeView === item.id && "bg-primary/10 text-primary font-medium"
                          )}
                        >
                          <motion.div
                            className={cn("h-4 w-4", item.color)}
                            whileHover={{ rotate: 15 }}
                          >
                            <item.icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.label}</span>
                          {item.badge && (
                            <motion.span
                              className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                        </SidebarMenuButton>
                      </motion.div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* Insights Section */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs text-muted-foreground/70 px-2 mb-1 flex items-center gap-2">
                <Brain className="h-3 w-3" />
                Intelligence
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.filter(item => item.section === "insights").map((item, index) => (
                    <SidebarMenuItem key={item.id}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 9) * 0.03 }}
                      >
                        <SidebarMenuButton
                          isActive={activeView === item.id}
                          onClick={() => setActiveView(item.id as ActiveView)}
                          tooltip={item.label}
                          className={cn(
                            "w-full relative overflow-hidden group",
                            activeView === item.id && "bg-primary/10 text-primary font-medium"
                          )}
                        >
                          <motion.div
                            className={cn("h-4 w-4", item.color)}
                            whileHover={{ rotate: 15 }}
                          >
                            <item.icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.label}</span>
                          {item.badge && (
                            <motion.span
                              className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-chart-1 to-chart-3 px-1.5 text-[10px] font-bold text-primary-foreground"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                        </SidebarMenuButton>
                      </motion.div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* Sidebar Footer */}
          <SidebarFooter className="border-t border-border/50 p-4">
            <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Avatar className="h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-chart-3 text-primary-foreground font-medium">AD</AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="flex flex-col flex-1 group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-semibold">Admin User</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Crown className="h-3 w-3 text-warning" />
                  Enterprise Admin
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 group-data-[collapsible=icon]:hidden">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        {/* Main Content Area */}
        <SidebarInset>
          {/* Header */}
          <motion.header 
            className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SidebarTriggerButton className="-ml-2" />
            
            <div className="flex flex-1 items-center gap-4">
              {/* AI-Powered Search */}
              <motion.div 
                className="relative flex-1 max-w-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Brain className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary animate-pulse" />
                <Input
                  placeholder="Ask AI anything... (employees, reports, analytics)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-20 bg-muted/30 border-transparent focus:border-primary/30 focus:bg-background/50 transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <kbd className="hidden md:flex h-5 items-center gap-1 rounded border bg-muted/50 px-1.5 text-[10px] font-medium text-muted-foreground">
                    <Mic className="h-3 w-3" />
                  </kbd>
                  <kbd className="hidden md:flex h-5 items-center gap-1 rounded border bg-muted/50 px-1.5 text-[10px] font-medium text-muted-foreground">
                    ⌘K
                  </kbd>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center gap-3">
              {/* Live Status */}
              <motion.div 
                className="hidden lg:flex items-center gap-4 px-4 py-1.5 rounded-full bg-muted/30 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-success"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-muted-foreground">System Online</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-mono text-xs">{currentTime.toLocaleTimeString()}</span>
                </div>
              </motion.div>

              {/* Theme Toggle */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="h-9 w-9"
                >
                  <AnimatePresence mode="wait">
                    {isDarkMode ? (
                      <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                        <Sun className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                        <Moon className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* AI Assistant Toggle */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveView("ai-assistant")}
                  className="gap-2 bg-gradient-to-r from-primary/10 to-chart-3/10 border-primary/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="h-4 w-4 text-primary" />
                  </motion.div>
                  <span className="hidden md:inline">AI Assistant</span>
                </Button>
              </motion.div>

              {/* Notifications */}
              <Popover>
                <PopoverTrigger asChild>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="relative h-9 w-9">
                      <Bell className="h-4 w-4" />
                      <motion.span
                        className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        5
                      </motion.span>
                    </Button>
                  </motion.div>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                  <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-chart-3/5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        Notifications
                      </h4>
                      <Badge variant="secondary" className="text-xs">5 new</Badge>
                    </div>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="p-2">
                      {[
                        { icon: AlertTriangle, title: "Flight Risk Alert", desc: "3 employees may leave", time: "2m ago", color: "text-warning" },
                        { icon: CheckCircle2, title: "Leave Approved", desc: "Your request was approved", time: "15m ago", color: "text-success" },
                        { icon: Brain, title: "AI Recommendation", desc: "Optimize team structure", time: "1h ago", color: "text-primary" },
                        { icon: UserPlus, title: "New Hire", desc: "Sarah joined Marketing", time: "2h ago", color: "text-info" },
                        { icon: Zap, title: "Workflow Complete", desc: "Payroll processed", time: "1d ago", color: "text-chart-2" },
                      ].map((n, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <div className={cn("p-2 rounded-lg bg-muted", n.color)}>
                            <n.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{n.title}</p>
                            <p className="text-xs text-muted-foreground">{n.desc}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </PopoverContent>
              </Popover>

              <Separator orientation="vertical" className="h-6" />

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="ghost" className="flex items-center gap-2 h-9 px-2">
                      <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-chart-3 text-primary-foreground text-sm font-medium">AD</AvatarFallback>
                      </Avatar>
                      <div className="hidden md:flex flex-col items-start">
                        <span className="text-sm font-medium">Admin</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Crown className="h-3 w-3 text-warning" />
                          Enterprise
                        </span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>Admin User</span>
                      <span className="text-xs font-normal text-muted-foreground">admin@cqube.ai</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Preferences
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveView("ai-assistant")}>
                    <Brain className="mr-2 h-4 w-4" />
                    AI Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">
            {renderContent()}
          </main>

          {/* Footer */}
          <motion.footer 
            className="sticky bottom-0 border-t border-border/50 bg-background/80 backdrop-blur-xl py-3 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-primary" />
                  © 2024 CQube People Enterprise
                </span>
                <span className="hidden md:flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-success"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>All systems operational</span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  Last sync: {currentTime.toLocaleTimeString()}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="h-3.5 w-3.5 text-primary" />
                  </motion.div>
                  V3.0 AI Enterprise
                </span>
              </div>
            </div>
          </motion.footer>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </div>
  );
}

// ============================================
// DASHBOARD V3 - AI-POWERED
// ============================================
function DashboardV3() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      title: "Total Workforce", value: "248", change: "+12%", changeType: "positive", 
      icon: Users, color: "text-primary", gradient: "from-primary to-chart-1",
      trend: [180, 195, 210, 220, 235, 248], description: "Active employees"
    },
    { 
      title: "AI Insights", value: "23", change: "+8 new", changeType: "positive", 
      icon: Brain, color: "text-chart-2", gradient: "from-chart-2 to-chart-3",
      trend: [5, 8, 12, 15, 18, 23], description: "Actionable recommendations"
    },
    { 
      title: "Engagement Score", value: "87%", change: "+5%", changeType: "positive", 
      icon: Heart, color: "text-destructive", gradient: "from-destructive to-warning",
      trend: [78, 80, 82, 84, 86, 87], description: "Employee satisfaction"
    },
    { 
      title: "Automation Active", value: "12", change: "98% success", changeType: "neutral", 
      icon: Zap, color: "text-warning", gradient: "from-warning to-chart-4",
      trend: [95, 96, 97, 98, 98, 98], description: "Running workflows"
    },
  ];

  const quickActions = [
    { icon: UserPlus, label: "Add Employee", color: "bg-chart-1", description: "Onboard new team member" },
    { icon: Brain, label: "AI Analysis", color: "bg-chart-2", description: "Run AI predictions" },
    { icon: DollarSign, label: "Run Payroll", color: "bg-chart-3", description: "Process monthly payroll" },
    { icon: Zap, label: "New Workflow", color: "bg-chart-4", description: "Create automation" },
  ];

  return (
    <motion.div 
      ref={ref}
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {/* Header */}
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-powered insights • Real-time analytics • Predictive intelligence
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[140px] bg-muted/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="gap-2 bg-gradient-to-r from-primary to-chart-3 hover:opacity-90">
              <Plus className="h-4 w-4" />
              Quick Action
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* AI Insights Banner */}
      <motion.div variants={fadeInUp}>
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <motion.div 
                className="p-4 rounded-2xl bg-gradient-to-br from-primary to-chart-3 text-primary-foreground"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Brain className="h-8 w-8" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  AI Recommendation
                  <Badge className="bg-primary/20 text-primary text-xs">High Priority</Badge>
                </h3>
                <p className="text-muted-foreground mt-1">
                  Based on predictive analytics, <span className="text-primary font-medium">3 employees</span> show flight risk indicators. 
                  Proactive engagement could reduce turnover by <span className="text-success font-medium">23%</span>.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View Analysis</Button>
                <Button size="sm">Take Action</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <Card className="relative overflow-hidden group">
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity", stat.gradient)} />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <motion.div 
                  className={cn("p-2 rounded-lg bg-gradient-to-br", stat.gradient, "text-white")}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <stat.icon className="h-4 w-4" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-2 mt-1">
                  {stat.changeType === "positive" && <TrendingUp className="h-3 w-3 text-success" />}
                  <span className={cn("text-xs", stat.changeType === "positive" ? "text-success" : "text-muted-foreground")}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs last period</span>
                </div>
                {/* Mini Sparkline */}
                <div className="mt-3 h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stat.trend.map((v, i) => ({ value: v, index: i }))}>
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={stat.color.includes("primary") ? COLORS.primary : stat.color.includes("chart-2") ? COLORS.chart2 : stat.color.includes("destructive") ? COLORS.destructive : COLORS.warning} stopOpacity={0.3}/>
                          <stop offset="100%" stopColor={stat.color.includes("primary") ? COLORS.primary : stat.color.includes("chart-2") ? COLORS.chart2 : stat.color.includes("destructive") ? COLORS.destructive : COLORS.warning} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke={stat.color.includes("primary") ? COLORS.primary : stat.color.includes("chart-2") ? COLORS.chart2 : stat.color.includes("destructive") ? COLORS.destructive : COLORS.warning} 
                        fill={`url(#gradient-${index})`}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Charts */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Attendance & Productivity Chart */}
        <motion.div className="lg:col-span-2" variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Attendance & Productivity
                  </CardTitle>
                  <CardDescription>Real-time workforce analytics</CardDescription>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-chart-1" /> Present</div>
                  <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-info" /> Productivity</div>
                  <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-warning" /> Overtime</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[320px] w-full">
                <ComposedChart data={attendanceData}>
                  <defs>
                    <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={COLORS.chart1} stopOpacity={0.4}/>
                      <stop offset="100%" stopColor={COLORS.chart1} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
                  <XAxis dataKey="month" className="text-xs" tickLine={false} axisLine={false} />
                  <YAxis className="text-xs" tickLine={false} axisLine={false} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="present" fill="url(#attendanceGradient)" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="productivity" stroke={COLORS.info} strokeWidth={2} dot={{ fill: COLORS.info, r: 4 }} />
                  <Line type="monotone" dataKey="overtime" stroke={COLORS.warning} strokeWidth={2} strokeDasharray="5 5" dot={{ fill: COLORS.warning, r: 3 }} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Insights Panel */}
        <motion.div variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary animate-pulse" />
                AI Insights
              </CardTitle>
              <CardDescription>Machine learning predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[320px]">
                <div className="space-y-3">
                  {aiInsights.map((insight, index) => (
                    <motion.div
                      key={insight.id}
                      className={cn(
                        "p-3 rounded-lg border transition-colors cursor-pointer",
                        insight.impact === "high" && "border-warning/30 bg-warning/5",
                        insight.impact === "medium" && "border-info/30 bg-info/5",
                        insight.impact === "low" && "border-muted bg-muted/30"
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {insight.type === "prediction" && <TrendingUp className="h-4 w-4 text-chart-2" />}
                          {insight.type === "recommendation" && <Lightbulb className="h-4 w-4 text-warning" />}
                          {insight.type === "alert" && <AlertTriangle className="h-4 w-4 text-destructive" />}
                          {insight.type === "opportunity" && <Zap className="h-4 w-4 text-info" />}
                          <span className="text-sm font-medium">{insight.title}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {insight.confidence}% confidence
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{insight.category}</Badge>
                        {insight.actionable && (
                          <Button size="sm" variant="ghost" className="h-6 text-xs">
                            Take Action <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Department Distribution */}
        <motion.div variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-primary" />
                Department Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="count"
                      nameKey="name"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} stroke="hsl(var(--background))" strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Workflows */}
        <motion.div variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-warning" />
                  Active Workflows
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-xs">
                  View All <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workflows.slice(0, 4).map((workflow, index) => (
                  <motion.div
                    key={workflow.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className={cn(
                      "p-2 rounded-lg",
                      workflow.status === "active" && "bg-success/10 text-success",
                      workflow.status === "paused" && "bg-warning/10 text-warning",
                      workflow.status === "draft" && "bg-muted text-muted-foreground"
                    )}>
                      <Zap className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{workflow.name}</p>
                      <p className="text-xs text-muted-foreground">{workflow.actions} actions • {workflow.lastRun}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {workflow.successRate}%
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={fadeInUp}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Frequently used operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      className="h-auto py-4 w-full flex-col gap-2 group"
                    >
                      <motion.div 
                        className={cn("p-2 rounded-lg text-white", action.color)}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <action.icon className="h-5 w-5" />
                      </motion.div>
                      <span className="text-xs font-medium">{action.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity & Upcoming Events */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Live Activity Feed
                </CardTitle>
                <Badge variant="secondary" className="animate-pulse">
                  <Radio className="h-3 w-3 mr-1" />
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: UserPlus, title: "New hire onboarded", desc: "Sarah Johnson joined Marketing", time: "2m ago", color: "text-success" },
                  { icon: Brain, title: "AI analysis completed", desc: "Q1 performance predictions ready", time: "15m ago", color: "text-chart-2" },
                  { icon: CheckCircle2, title: "Leave approved", desc: "Emily Davis - Annual Leave", time: "1h ago", color: "text-success" },
                  { icon: Zap, title: "Workflow triggered", desc: "Payroll processing started", time: "2h ago", color: "text-warning" },
                  { icon: DollarSign, title: "Payroll completed", desc: "January payroll - $492,000", time: "5h ago", color: "text-primary" },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div 
                      className={cn("p-2 rounded-lg bg-muted group-hover:bg-muted/70 transition-colors", activity.color)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <activity.icon className="h-4 w-4" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.desc}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: "Q1 All Hands Meeting", date: "Jan 25, 2024", type: "Meeting", color: "bg-primary" },
                  { title: "Performance Review Cycle", date: "Jan 30, 2024", type: "Review", color: "bg-warning" },
                  { title: "New Hire Orientation", date: "Feb 1, 2024", type: "Training", color: "bg-success" },
                  { title: "Leadership Workshop", date: "Feb 5, 2024", type: "Workshop", color: "bg-info" },
                  { title: "Benefits Enrollment Deadline", date: "Feb 15, 2024", type: "Deadline", color: "bg-destructive" },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={cn("h-12 w-12 rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold", event.color)}>
                      <span>{event.date.split(" ")[1]?.replace(",", "")}</span>
                      <span className="text-[10px] font-normal opacity-80">{event.date.split(" ")[0]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.type}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================
// EMPLOYEES V3 - ADVANCED
// ============================================
function EmployeesV3() {
  const [employees] = useState(mockEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: "bg-success/10 text-success border-success/20",
      on_leave: "bg-warning/10 text-warning border-warning/20",
      terminated: "bg-destructive/10 text-destructive border-destructive/20",
    };
    return colors[status] || colors.active;
  };

  const getWorkModeIcon = (mode?: string) => {
    const icons: Record<string, React.ElementType> = {
      office: Building2,
      remote: Globe,
      hybrid: Users2,
    };
    const Icon = icons[mode || "office"];
    return <Icon className="h-3 w-3" />;
  };

  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      {/* Header */}
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">People Directory</h1>
          <p className="text-muted-foreground mt-1">Manage your most valuable asset - your people</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-lg p-1 bg-muted/30">
            <Button variant={viewMode === "grid" ? "secondary" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "secondary" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="gap-2 bg-gradient-to-r from-primary to-chart-3">
              <UserPlus className="h-4 w-4" />
              Add Person
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* AI-Powered Search & Filters */}
      <motion.div variants={fadeInUp}>
        <Card className="bg-muted/30 border-border/50">
          <CardContent className="py-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="relative flex-1 max-w-sm">
                <Brain className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary animate-pulse" />
                <Input 
                  placeholder="AI-powered search..." 
                  className="pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]"><SelectValue placeholder="Department" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {["Engineering", "Marketing", "Sales", "HR", "Finance", "Operations"].map(dept => (
                    <SelectItem key={dept} value={dept.toLowerCase()}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on_leave">On Leave</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Brain className="h-4 w-4 text-primary" />
                AI Match
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Employee Grid/List */}
      {viewMode === "grid" ? (
        <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" variants={staggerContainer}>
          {employees.map((employee, index) => (
            <motion.div
              key={employee.id}
              variants={scaleIn}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedEmployee(employee)}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden group">
                <div className={cn("h-1.5", 
                  employee.performance && employee.performance >= 90 ? "bg-gradient-to-r from-success to-chart-1" :
                  employee.performance && employee.performance >= 80 ? "bg-gradient-to-r from-primary to-chart-2" :
                  "bg-gradient-to-r from-warning to-chart-4"
                )} />
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <Avatar className="h-16 w-16 ring-4 ring-background group-hover:ring-primary/20 transition-all">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-chart-3 text-primary-foreground text-xl font-bold">
                          {employee.firstName[0]}{employee.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <h3 className="font-semibold mt-3 group-hover:text-primary transition-colors">
                      {employee.firstName} {employee.lastName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{employee.designation}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status.replace("_", " ")}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {getWorkModeIcon(employee.workMode)}
                        <span className="ml-1">{employee.workMode}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Department</span>
                      <span className="font-medium">{employee.department}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Performance</span>
                        <span className="font-medium">{employee.performance}%</span>
                      </div>
                      <Progress value={employee.performance} className="h-1.5" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">AI Match</span>
                      <div className="flex items-center gap-1">
                        <Brain className="h-3 w-3 text-primary" />
                        <span className="font-medium text-primary">{employee.aiMatchScore}%</span>
                      </div>
                    </div>
                  </div>
                  
                  {employee.skills && (
                    <div className="flex flex-wrap gap-1 mt-4">
                      {employee.skills.slice(0, 2).map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                      ))}
                      {employee.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">+{employee.skills.length - 2}</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>AI Match</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Work Mode</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee, index) => (
                    <motion.tr
                      key={employee.id}
                      className="cursor-pointer group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                      onClick={() => setSelectedEmployee(employee)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gradient-to-br from-primary to-chart-3 text-primary-foreground">
                              {employee.firstName[0]}{employee.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {employee.firstName} {employee.lastName}
                            </div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={employee.performance} className="h-2 w-16" />
                          <span className="text-sm font-medium">{employee.performance}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Brain className="h-4 w-4 text-primary" />
                          <span className="font-medium text-primary">{employee.aiMatchScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(employee.status)}>
                          {employee.status.replace("_", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="gap-1">
                          {getWorkModeIcon(employee.workMode)}
                          {employee.workMode}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem><Eye className="mr-2 h-4 w-4" /> View Profile</DropdownMenuItem>
                            <DropdownMenuItem><Edit className="mr-2 h-4 w-4" /> Edit</DropdownMenuItem>
                            <DropdownMenuItem><MessageSquare className="mr-2 h-4 w-4" /> Message</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Employee Detail Dialog */}
      <Dialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEmployee && (
            <>
              <DialogHeader>
                <DialogTitle>Employee Profile</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-6">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Avatar className="h-24 w-24 ring-4 ring-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-chart-3 text-primary-foreground text-2xl font-bold">
                        {selectedEmployee.firstName[0]}{selectedEmployee.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">{selectedEmployee.firstName} {selectedEmployee.lastName}</h2>
                      <Badge className={getStatusColor(selectedEmployee.status)}>
                        {selectedEmployee.status.replace("_", " ")}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{selectedEmployee.designation}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        {selectedEmployee.department}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {selectedEmployee.location}
                      </div>
                      <Badge variant="outline" className="gap-1">
                        {getWorkModeIcon(selectedEmployee.workMode)}
                        {selectedEmployee.workMode}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <Brain className="h-5 w-5 text-primary animate-pulse" />
                      <span className="text-3xl font-bold text-primary">{selectedEmployee.aiMatchScore}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">AI Match Score</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Performance", value: `${selectedEmployee.performance}%`, icon: Target, color: "text-primary" },
                    { label: "Wellness", value: `${selectedEmployee.wellnessScore}%`, icon: Heart, color: "text-destructive" },
                    { label: "Engagement", value: `${selectedEmployee.engagementScore}%`, icon: Zap, color: "text-warning" },
                    { label: "Learning", value: `${selectedEmployee.learningProgress}%`, icon: GraduationCap, color: "text-info" },
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="text-center">
                        <CardContent className="pt-4 pb-3">
                          <metric.icon className={cn("h-5 w-5 mx-auto mb-2", metric.color)} />
                          <div className="text-xl font-bold">{metric.value}</div>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Contact & Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEmployee.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEmployee.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Employment Details</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Joined {new Date(selectedEmployee.joinDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>Reports to {selectedEmployee.manager}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                {selectedEmployee.skills && (
                  <div>
                    <h3 className="font-semibold mb-3">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEmployee.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Badge variant="secondary" className="py-1.5">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter className="gap-2">
                <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> Message</Button>
                <Button variant="outline" onClick={() => setSelectedEmployee(null)}>Close</Button>
                <Button><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

// ============================================
// PLACEHOLDER COMPONENTS FOR OTHER VIEWS
// ============================================
function AttendanceV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Time & Attendance</h1>
          <p className="text-muted-foreground mt-1">AI-powered attendance tracking with predictive analytics</p>
        </div>
        <Button className="gap-2"><Fingerprint className="h-4 w-4" /> Biometric Check-in</Button>
      </motion.div>
      
      <motion.div className="grid gap-4 md:grid-cols-4" variants={staggerContainer}>
        {[
          { title: "Present Today", value: "235", icon: UserCheck, color: "text-success" },
          { title: "Absent", value: "5", icon: UserX, color: "text-destructive" },
          { title: "Late Arrivals", value: "8", icon: Timer, color: "text-warning" },
          { title: "On Leave", value: "8", icon: Plane, color: "text-info" },
        ].map((stat, i) => (
          <motion.div key={i} variants={scaleIn} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ y: -4 }}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-xl bg-muted", stat.color)}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Attendance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <AreaChart data={attendanceData}>
                <defs>
                  <linearGradient id="attendanceGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS.chart1} stopOpacity={0.3}/>
                    <stop offset="100%" stopColor={COLORS.chart1} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="present" stroke={COLORS.chart1} fill="url(#attendanceGrad)" strokeWidth={2} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function RecruitmentV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Talent Acquisition</h1>
          <p className="text-muted-foreground mt-1">AI-powered recruitment with smart candidate matching</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> Post New Job</Button>
      </motion.div>
      
      <motion.div className="grid gap-4 md:grid-cols-4" variants={staggerContainer}>
        {[
          { title: "Open Positions", value: "15", icon: Briefcase, color: "text-primary" },
          { title: "Applications", value: "156", icon: FileText, color: "text-info" },
          { title: "In Interview", value: "24", icon: Users, color: "text-warning" },
          { title: "Hired This Month", value: "8", icon: UserPlus, color: "text-success" },
        ].map((stat, i) => (
          <motion.div key={i} variants={scaleIn} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ y: -4 }}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-xl bg-muted", stat.color)}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Recruitment Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <FunnelChart>
                <Tooltip />
                <Funnel dataKey="value" data={recruitmentFunnel} isAnimationActive>
                  <LabelList position="right" fill="#000" stroke="none" dataKey="stage" />
                </Funnel>
              </FunnelChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function PayrollV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Compensation</h1>
          <p className="text-muted-foreground mt-1">Smart payroll with tax optimization</p>
        </div>
        <Button className="gap-2"><DollarSign className="h-4 w-4" /> Run Payroll</Button>
      </motion.div>
      
      <motion.div className="grid gap-4 md:grid-cols-4" variants={staggerContainer}>
        {[
          { title: "Total Payroll", value: "$492K", icon: DollarSign, color: "text-primary" },
          { title: "Paid", value: "248", icon: CheckCircle2, color: "text-success" },
          { title: "Pending", value: "12", icon: Timer, color: "text-warning" },
          { title: "vs Last Month", value: "+3.2%", icon: TrendingUp, color: "text-info" },
        ].map((stat, i) => (
          <motion.div key={i} variants={scaleIn} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ y: -4 }}>
              <Card><CardContent className="pt-6"><div className="flex items-center gap-4">
                <div className={cn("p-3 rounded-xl bg-muted", stat.color)}><stat.icon className="h-6 w-6" /></div>
                <div><p className="text-2xl font-bold">{stat.value}</p><p className="text-sm text-muted-foreground">{stat.title}</p></div>
              </div></CardContent></Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader><CardTitle>Payroll Trend</CardTitle></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <AreaChart data={payrollData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" tickFormatter={(v) => `$${v/1000}k`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="amount" stroke={COLORS.primary} fill={COLORS.primary} fillOpacity={0.2} strokeWidth={2} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function PerformanceV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Performance</h1>
          <p className="text-muted-foreground mt-1">360° feedback with OKR tracking</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> Create Goal</Button>
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Active Goals</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Complete Q1 Sales Target", employee: "Michael Brown", progress: 75, priority: "high" },
                { title: "Launch Marketing Campaign", employee: "Sarah Johnson", progress: 100, priority: "high" },
                { title: "Complete AWS Certification", employee: "John Smith", progress: 45, priority: "medium" },
              ].map((goal, i) => (
                <motion.div key={i} className="p-4 rounded-lg border" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <div className="flex items-center justify-between mb-2">
                    <div><h4 className="font-medium">{goal.title}</h4><p className="text-sm text-muted-foreground">{goal.employee}</p></div>
                    <Badge className={goal.priority === "high" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}>{goal.priority}</Badge>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function TrainingV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Learning Hub</h1>
          <p className="text-muted-foreground mt-1">AI-powered personalized learning paths</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> Add Course</Button>
      </motion.div>
      
      <motion.div className="grid gap-4 md:grid-cols-3" variants={staggerContainer}>
        {[
          { title: "Leadership Development", enrolled: 25, status: "ongoing" },
          { title: "AWS Cloud Practitioner", enrolled: 18, status: "upcoming" },
          { title: "Project Management", enrolled: 32, status: "completed" },
        ].map((course, i) => (
          <motion.div key={i} variants={scaleIn} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ y: -4 }}>
              <Card className="cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{course.enrolled} enrolled</span>
                    <Badge className={course.status === "ongoing" ? "bg-warning/10 text-warning" : course.status === "upcoming" ? "bg-info/10 text-info" : "bg-success/10 text-success"}>
                      {course.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function WellnessV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl font-bold tracking-tight">Employee Wellness</h1>
        <p className="text-muted-foreground mt-1">Holistic well-being tracking and insights</p>
      </motion.div>
      
      <motion.div className="grid gap-4 md:grid-cols-5" variants={staggerContainer}>
        {wellnessData.map((item, i) => (
          <motion.div key={i} variants={scaleIn} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ y: -4 }}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{item.score}%</div>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function WorkflowsV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="flex items-center justify-between" variants={fadeInUp}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Workflow Automation</h1>
          <p className="text-muted-foreground mt-1">Streamline HR processes with intelligent automation</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> Create Workflow</Button>
      </motion.div>
      
      <motion.div className="grid gap-4" variants={staggerContainer}>
        {workflows.map((workflow, i) => (
          <motion.div key={i} variants={fadeInUp} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ x: 4 }}>
              <Card className="cursor-pointer">
                <CardContent className="py-4">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-xl", workflow.status === "active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning")}>
                      <Zap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{workflow.name}</h3>
                      <p className="text-sm text-muted-foreground">Trigger: {workflow.trigger} • {workflow.actions} actions</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{workflow.successRate}% success</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Last run: {workflow.lastRun}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function AnalyticsV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl font-bold tracking-tight">People Analytics</h1>
        <p className="text-muted-foreground mt-1">Predictive insights powered by AI</p>
      </motion.div>
      
      <motion.div className="grid gap-4 md:grid-cols-3" variants={staggerContainer}>
        {[
          { title: "Turnover Prediction", value: "8.2%", icon: TrendingDown, color: "text-success" },
          { title: "Avg Tenure", value: "3.4 yrs", icon: Clock, color: "text-primary" },
          { title: "Cost Per Hire", value: "$4,250", icon: DollarSign, color: "text-warning" },
        ].map((metric, i) => (
          <motion.div key={i} variants={scaleIn} transition={{ delay: i * 0.1 }}>
            <motion.div whileHover={{ y: -4 }}>
              <Card><CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{metric.title}</span>
                  <metric.icon className={cn("h-4 w-4", metric.color)} />
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
              </CardContent></Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader><CardTitle>Engagement Trend</CardTitle></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={engagementTrend}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="score" stroke={COLORS.primary} strokeWidth={2} dot={{ fill: COLORS.primary, r: 4 }} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function AIAssistantView() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    { role: "ai", content: "Hello! I'm your AI HR Assistant. I can help you with:\n• Employee insights and predictions\n• Payroll calculations\n• Leave management\n• Performance analysis\n• Recruitment recommendations\n\nHow can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  return (
    <motion.div className="space-y-6 h-[calc(100vh-200px)]" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Brain className="h-10 w-10 text-primary" />
          </motion.div>
          AI Assistant
        </h1>
        <p className="text-muted-foreground mt-1">Your intelligent HR companion powered by advanced AI</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex-1">
        <Card className="h-full flex flex-col">
          <CardContent className="flex-1 p-0 flex flex-col">
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Avatar className={cn("h-8 w-8", msg.role === "ai" && "bg-gradient-to-br from-primary to-chart-3")}>
                      <AvatarFallback className={cn(msg.role === "ai" && "text-primary-foreground")}>
                        {msg.role === "ai" ? <Brain className="h-4 w-4" /> : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className={cn(
                      "rounded-2xl px-4 py-2 max-w-[80%]",
                      msg.role === "ai" ? "bg-muted" : "bg-primary text-primary-foreground"
                    )}>
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask anything about HR..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && input.trim()) {
                      setMessages([...messages, { role: "user", content: input }]);
                      setTimeout(() => {
                        setMessages(prev => [...prev, { 
                          role: "ai", 
                          content: "I understand you're asking about \"" + input + "\". Based on my analysis of your HR data, I can provide insights and recommendations. Would you like me to generate a detailed report or take a specific action?" 
                        }]);
                      }, 1000);
                      setInput("");
                    }
                  }}
                />
                <Button><Send className="h-4 w-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function SettingsV3() {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Configure your enterprise HR platform</p>
      </motion.div>
      
      <Tabs defaultValue="company">
        <TabsList>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="mt-6">
          <Card>
            <CardHeader><CardTitle>Company Information</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Company Name</Label><Input defaultValue="CQube Technologies" /></div>
                <div className="space-y-2"><Label>Website</Label><Input defaultValue="https://cqube.ai" /></div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai" className="mt-6">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5 text-primary" /> AI Configuration</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div><Label>Predictive Analytics</Label><p className="text-sm text-muted-foreground">Enable AI predictions</p></div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div><Label>Auto Recommendations</Label><p className="text-sm text-muted-foreground">Receive AI suggestions</p></div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
