import { Supplier, Product, Order, ProductVariant } from '@/types';
import { generateId } from './utils';

export const sampleSuppliers: Supplier[] = [
  {
    id: generateId(),
    name: 'Tessuti Milano S.r.l.',
    email: 'ordini@tessutimilano.it',
    phone: '+39 02 1234567',
    address: {
      street: 'Via della Moda 15',
      city: 'Milano',
      country: 'Italia',
      zipCode: '20121'
    },
    specializations: ['Abbigliamento uomo', 'Giacche', 'Pantaloni'],
    leadTimesDays: 30,
    qualityRating: 4.5,
    paymentTerms: '30 giorni fine mese',
    notes: 'Specializzato in abbigliamento formale di alta qualità',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: generateId(),
    name: 'Accessori Luxury Ltd.',
    email: 'info@accessoriluxury.com',
    phone: '+39 055 9876543',
    address: {
      street: 'Borgo Santi Apostoli 8',
      city: 'Firenze',
      country: 'Italia',
      zipCode: '50123'
    },
    specializations: ['Accessori', 'Cinture', 'Borse', 'Portafogli'],
    leadTimesDays: 21,
    qualityRating: 4.8,
    paymentTerms: '15 giorni data fattura',
    notes: 'Produzione artigianale di accessori in pelle',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: generateId(),
    name: 'Fashion Forward S.p.A.',
    email: 'production@fashionforward.it',
    phone: '+39 081 5555555',
    address: {
      street: 'Via Nazionale 100',
      city: 'Napoli',
      country: 'Italia',
      zipCode: '80139'
    },
    specializations: ['Abbigliamento casual', 'T-shirt', 'Felpe', 'Jeans'],
    leadTimesDays: 25,
    qualityRating: 4.2,
    paymentTerms: '45 giorni fine mese',
    notes: 'Grande capacità produttiva per ordini volume',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  }
];

export const sampleProducts: Product[] = [
  {
    id: generateId(),
    name: 'Giacca Blazer Uomo Elegante',
    code: 'GBU001',
    category: 'abbigliamento',
    subcategory: 'Giacche',
    description: 'Giacca blazer elegante in lana vergine per uomo, perfetta per occasioni formali',
    season: 'autunno-inverno',
    collection: 'Formal 2024',
    variants: [
      {
        id: generateId(),
        sku: 'GBU001-BLU-48',
        color: 'Blu Navy',
        size: '48',
        material: 'Lana vergine 100%',
        price: 299.99,
        costPrice: 120.00,
        minimumOrderQuantity: 10
      },
      {
        id: generateId(),
        sku: 'GBU001-BLU-50',
        color: 'Blu Navy',
        size: '50',
        material: 'Lana vergine 100%',
        price: 299.99,
        costPrice: 120.00,
        minimumOrderQuantity: 10
      },
      {
        id: generateId(),
        sku: 'GBU001-GRI-48',
        color: 'Grigio Antracite',
        size: '48',
        material: 'Lana vergine 100%',
        price: 299.99,
        costPrice: 120.00,
        minimumOrderQuantity: 10
      }
    ],
    materials: ['Lana vergine', 'Fodera viscosa'],
    careInstructions: ['Lavaggio a secco', 'Non stirare direttamente'],
    targetPrice: 299.99,
    images: [],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: generateId(),
    name: 'Cintura Pelle Premium',
    code: 'CPP001',
    category: 'accessori',
    subcategory: 'Cinture',
    description: 'Cintura in pelle italiana di alta qualità con fibbia in metallo satinato',
    season: 'cruise',
    collection: 'Accessori Luxury 2024',
    variants: [
      {
        id: generateId(),
        sku: 'CPP001-NER-85',
        color: 'Nero',
        size: '85cm',
        material: 'Pelle italiana',
        price: 89.99,
        costPrice: 35.00,
        minimumOrderQuantity: 20
      },
      {
        id: generateId(),
        sku: 'CPP001-MAR-85',
        color: 'Marrone',
        size: '85cm',
        material: 'Pelle italiana',
        price: 89.99,
        costPrice: 35.00,
        minimumOrderQuantity: 20
      }
    ],
    materials: ['Pelle italiana', 'Metallo satinato'],
    careInstructions: ['Pulire con panno umido', 'Utilizzare crema per pelle'],
    targetPrice: 89.99,
    images: [],
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-02-25')
  },
  {
    id: generateId(),
    name: 'T-Shirt Basic Cotton',
    code: 'TBC001',
    category: 'abbigliamento',
    subcategory: 'T-shirt',
    description: 'T-shirt basic in cotone 100% organico, fit regular',
    season: 'primavera-estate',
    collection: 'Casual 2024',
    variants: [
      {
        id: generateId(),
        sku: 'TBC001-BIA-M',
        color: 'Bianco',
        size: 'M',
        material: 'Cotone organico 100%',
        price: 24.99,
        costPrice: 8.50,
        minimumOrderQuantity: 50
      },
      {
        id: generateId(),
        sku: 'TBC001-NER-M',
        color: 'Nero',
        size: 'M',
        material: 'Cotone organico 100%',
        price: 24.99,
        costPrice: 8.50,
        minimumOrderQuantity: 50
      },
      {
        id: generateId(),
        sku: 'TBC001-BIA-L',
        color: 'Bianco',
        size: 'L',
        material: 'Cotone organico 100%',
        price: 24.99,
        costPrice: 8.50,
        minimumOrderQuantity: 50
      }
    ],
    materials: ['Cotone organico'],
    careInstructions: ['Lavaggio 30°C', 'Non candeggiare', 'Stirare a bassa temperatura'],
    targetPrice: 24.99,
    images: [],
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  }
];

export const sampleOrders: Order[] = [
  {
    id: generateId(),
    orderNumber: 'ORD-2024-001',
    supplierId: sampleSuppliers[0].id,
    status: 'in-produzione',
    items: [
      {
        id: generateId(),
        productId: sampleProducts[0].id,
        variantId: sampleProducts[0].variants[0].id,
        quantity: 50,
        unitPrice: 120.00,
        totalPrice: 6000.00,
        qualityGrade: 'A'
      },
      {
        id: generateId(),
        productId: sampleProducts[0].id,
        variantId: sampleProducts[0].variants[1].id,
        quantity: 30,
        unitPrice: 120.00,
        totalPrice: 3600.00,
        qualityGrade: 'A'
      }
    ],
    totalAmount: 9600.00,
    orderDate: new Date('2024-08-15'),
    expectedDeliveryDate: new Date('2024-09-30'),
    notes: 'Ordine prioritario per collezione autunno',
    productionMilestones: [
      {
        id: generateId(),
        name: 'Approvazione campioni',
        description: 'Verifica e approvazione dei campioni di produzione',
        expectedDate: new Date('2024-08-22'),
        actualDate: new Date('2024-08-21'),
        status: 'completato',
        notes: 'Campioni approvati senza modifiche'
      },
      {
        id: generateId(),
        name: 'Inizio produzione',
        description: 'Avvio della produzione in serie',
        expectedDate: new Date('2024-08-25'),
        actualDate: new Date('2024-08-26'),
        status: 'completato',
        notes: 'Produzione iniziata con un giorno di ritardo'
      },
      {
        id: generateId(),
        name: 'Controllo qualità',
        description: 'Controllo qualità sui primi pezzi prodotti',
        expectedDate: new Date('2024-09-15'),
        status: 'in-corso'
      },
      {
        id: generateId(),
        name: 'Spedizione',
        description: 'Spedizione del lotto completo',
        expectedDate: new Date('2024-09-30'),
        status: 'programmato'
      }
    ],
    createdAt: new Date('2024-08-15'),
    updatedAt: new Date('2024-09-10')
  },
  {
    id: generateId(),
    orderNumber: 'ORD-2024-002',
    supplierId: sampleSuppliers[1].id,
    status: 'completato',
    items: [
      {
        id: generateId(),
        productId: sampleProducts[1].id,
        variantId: sampleProducts[1].variants[0].id,
        quantity: 100,
        unitPrice: 35.00,
        totalPrice: 3500.00,
        receivedQuantity: 100,
        qualityGrade: 'A'
      }
    ],
    totalAmount: 3500.00,
    orderDate: new Date('2024-07-10'),
    expectedDeliveryDate: new Date('2024-08-05'),
    actualDeliveryDate: new Date('2024-08-03'),
    notes: 'Ordine completato con anticipo',
    productionMilestones: [
      {
        id: generateId(),
        name: 'Preparazione materiali',
        description: 'Preparazione pelli e materiali',
        expectedDate: new Date('2024-07-15'),
        actualDate: new Date('2024-07-14'),
        status: 'completato'
      },
      {
        id: generateId(),
        name: 'Lavorazione',
        description: 'Lavorazione artigianale delle cinture',
        expectedDate: new Date('2024-07-25'),
        actualDate: new Date('2024-07-23'),
        status: 'completato'
      },
      {
        id: generateId(),
        name: 'Controllo finale',
        description: 'Controllo finale e confezionamento',
        expectedDate: new Date('2024-08-01'),
        actualDate: new Date('2024-07-30'),
        status: 'completato'
      },
      {
        id: generateId(),
        name: 'Spedizione',
        description: 'Spedizione completata',
        expectedDate: new Date('2024-08-05'),
        actualDate: new Date('2024-08-03'),
        status: 'completato'
      }
    ],
    createdAt: new Date('2024-07-10'),
    updatedAt: new Date('2024-08-03')
  }
];

export function initializeSampleData() {
  if (typeof window === 'undefined') return;

  const { storage } = require('./storage');

  // Only initialize if no data exists
  const existingSuppliers = storage.getSuppliers();
  if (existingSuppliers.length === 0) {
    sampleSuppliers.forEach(supplier => storage.saveSupplier(supplier));
    sampleProducts.forEach(product => storage.saveProduct(product));
    sampleOrders.forEach(order => storage.saveOrder(order));

    console.log('Sample data initialized');
  }
}