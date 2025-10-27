// This is a mock payment service
// In a real application, this would communicate with your backend server
// which would then communicate with Stripe's API

import logger from '../utils/logger';

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
}

export interface PaymentMethod {
  id: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
  };
}

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  address: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export class PaymentService {
  private static instance: PaymentService;
  private baseUrl: string;

  private constructor() {
    // Temporary mock API URL
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  public static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  // Create a payment intent on the backend
  async createPaymentIntent(
    amount: number,
    currency = 'usd',
    items?: CartItem[],
    customer?: CustomerInfo,
  ): Promise<{ client_secret: string }> {
    logger.debug('🔄 PaymentService: Creating payment intent...');
    logger.debug('📍 URL:', `${this.baseUrl}/create-payment-intent`);
    logger.debug('💰 Amount:', amount, '→', Math.round(amount * 100), 'cents');
    logger.debug('📦 Payload:', { amount: Math.round(amount * 100), currency, items, customer });

    const response = await fetch(`${this.baseUrl}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to cents
        currency,
        items,
        customer,
      }),
    });

    logger.debug('📨 Response status:', response.status, response.statusText);
    logger.debug('📨 Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      logger.error('❌ Backend error:', errorText);
      throw new Error(`Failed to create payment intent: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    logger.debug('✅ Payment intent response:', data);
    logger.debug('🔑 Client secret received:', data.client_secret ? 'YES' : 'NO');
    return data;
  }

  // Send payment success confirmation to backend
  async paymentSuccess(
    paymentIntentId: string,
    items: CartItem[],
    customer: CustomerInfo,
    total: string,
  ): Promise<{ success: boolean; orderId: string; message: string }> {
    logger.debug('🔄 PaymentService: Sending request to backend...');
    logger.debug('URL:', `${this.baseUrl}/payment-success`);
    logger.debug('Payload:', { paymentIntentId, items, customer, total });

    const response = await fetch(`${this.baseUrl}/payment-success`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentIntentId,
        items,
        customer,
        total,
      }),
    });

    logger.debug('📨 Backend response status:', response.status);
    logger.debug('📨 Backend response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      logger.error('❌ Backend error response:', errorText);
      throw new Error(`Failed to confirm payment with backend: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    logger.debug('✅ Backend response data:', data);
    return data;
  }

  // Get payment status
  async getPaymentStatus(paymentIntentId: string): Promise<{ status: string; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/payment-status/${paymentIntentId}`);

      if (!response.ok) {
        throw new Error('Failed to get payment status');
      }

      const data = await response.json();
      return { status: data.status };
    } catch (error) {
      // For demo purposes, return a successful status
      return { status: 'succeeded' };
    }
  }
}

export default PaymentService.getInstance();
