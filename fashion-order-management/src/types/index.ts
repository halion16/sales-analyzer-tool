export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
    zipCode: string;
  };
  specializations: string[];
  leadTimesDays: number;
  qualityRating: number;
  paymentTerms: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  season: Season;
  collection: string;
  variants: ProductVariant[];
  materials: string[];
  careInstructions: string[];
  targetPrice: number;
  images: string[];
  technicalSheet?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariant {
  id: string;
  sku: string;
  color: string;
  size: string;
  material?: string;
  price: number;
  costPrice: number;
  minimumOrderQuantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  supplierId: string;
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  orderDate: Date;
  expectedDeliveryDate: Date;
  actualDeliveryDate?: Date;
  notes?: string;
  qualityControlNotes?: string;
  productionMilestones: ProductionMilestone[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  receivedQuantity?: number;
  defectiveQuantity?: number;
  qualityGrade?: QualityGrade;
}

export interface ProductionMilestone {
  id: string;
  name: string;
  description: string;
  expectedDate: Date;
  actualDate?: Date;
  status: MilestoneStatus;
  notes?: string;
}

export interface QualityControl {
  id: string;
  orderId: string;
  orderItemId: string;
  inspectionDate: Date;
  inspector: string;
  grade: QualityGrade;
  defects: QualityDefect[];
  notes?: string;
  approved: boolean;
  images?: string[];
}

export interface QualityDefect {
  type: string;
  severity: 'minor' | 'major' | 'critical';
  quantity: number;
  description: string;
}

export interface Return {
  id: string;
  orderId: string;
  orderItemId: string;
  reason: ReturnReason;
  quantity: number;
  returnDate: Date;
  status: ReturnStatus;
  refundAmount?: number;
  notes?: string;
  createdAt: Date;
}

export type ProductCategory =
  | 'abbigliamento'
  | 'accessori'
  | 'calzature'
  | 'intimo';

export type Season =
  | 'primavera-estate'
  | 'autunno-inverno'
  | 'cruise'
  | 'pre-fall';

export type OrderStatus =
  | 'bozza'
  | 'inviato'
  | 'confermato'
  | 'in-produzione'
  | 'controllo-qualita'
  | 'spedito'
  | 'consegnato'
  | 'completato'
  | 'annullato';

export type MilestoneStatus =
  | 'programmato'
  | 'in-corso'
  | 'completato'
  | 'ritardato'
  | 'saltato';

export type QualityGrade =
  | 'A'
  | 'B'
  | 'C'
  | 'scarto';

export type ReturnReason =
  | 'difetto-qualita'
  | 'taglia-errata'
  | 'colore-errato'
  | 'materiale-errato'
  | 'ritardo-consegna'
  | 'non-conforme-campione'
  | 'altro';

export type ReturnStatus =
  | 'richiesto'
  | 'autorizzato'
  | 'in-transito'
  | 'ricevuto'
  | 'verificato'
  | 'rimborsato'
  | 'respinto';

export interface DashboardKPI {
  ordersInProgress: number;
  totalOrderValue: number;
  averageLeadTime: number;
  qualityRate: number;
  onTimeDeliveryRate: number;
  returnRate: number;
  topSuppliers: Array<{
    id: string;
    name: string;
    ordersCount: number;
    totalValue: number;
  }>;
  productionStatus: Array<{
    status: OrderStatus;
    count: number;
  }>;
}