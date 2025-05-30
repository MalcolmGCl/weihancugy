import { User, Document, SubscriptionTier } from "@shared/schema";

export interface LatexCompilationResult {
  success: boolean;
  pdf?: string; // base64 encoded PDF or HTML when isHtml is true
  error?: string;
  errorDetails?: {
    line: number;
    message: string;
  }[];
  isHtml?: boolean; // Indicates if pdf is actually HTML content (used for fallback in deployment)
}

export interface GenerateLatexResponse {
  latex: string;
  compilationResult: LatexCompilationResult;
  documentId?: number;
}

export interface UserSession {
  user: (User & { id: number }) | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  tier: SubscriptionTier;
  usage: {
    current: number;
    limit: number;
    resetDate: string;
  };
  refillPackCredits: number;
  lastAuthCheck?: number; // Timestamp of last successful auth check
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface EditorState {
  inputContent: string;
  latexContent: string;
  documentType: string;
  compilationResult: LatexCompilationResult | null;
  isGenerating: boolean;
  documentId?: number;
  title: string;
}

export interface DocumentHistoryItem extends Document {
  formattedDate: string;
}

export interface AIProviderInfo {
  id: string;
  name: string;
  requiresApiKey: boolean;
  isAvailable: boolean;
  minimumTier: SubscriptionTier;
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface SubscriptionOption {
  id: SubscriptionTier;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  isCurrentPlan?: boolean;
}

export interface LaTeXTemplate {
  id: string;
  name: string;
  content: string;
}

export interface LatexGenerationOptions {
  model?: string;
  splitTables?: boolean;
  useMath?: boolean;
}

export interface ErrorNotificationData {
  title: string;
  message: string;
  actions?: {
    label: string;
    action: () => void;
  }[];
}
