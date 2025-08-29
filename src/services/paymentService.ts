// This is a mock payment service
// In a real application, this would communicate with your backend server
// which would then communicate with Stripe's API

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
}

export class PaymentService {
  private static instance: PaymentService;
  private baseUrl: string;

  private constructor() {
    // In production, this would be your backend API URL
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
    console.log('🔄 PaymentService: Creating payment intent...');
    console.log('📍 URL:', `${this.baseUrl}/create-payment-intent`);
    console.log('💰 Amount:', amount, '→', Math.round(amount * 100), 'cents');
    console.log('📦 Payload:', { amount: Math.round(amount * 100), currency, items, customer });

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

    console.log('📨 Response status:', response.status, response.statusText);
    console.log('📨 Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Backend error:', errorText);
      throw new Error(`Failed to create payment intent: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Payment intent response:', data);
    console.log('🔑 Client secret received:', data.client_secret ? 'YES' : 'NO');
    return data;
  }

  // Send payment success confirmation to backend
  async paymentSuccess(
    paymentIntentId: string,
    items: CartItem[],
    customer: CustomerInfo,
    total: string,
  ): Promise<{ success: boolean; orderId: string; message: string }> {
    console.log('🔄 PaymentService: Sending request to backend...');
    console.log('URL:', `${this.baseUrl}/payment-success`);
    console.log('Payload:', { paymentIntentId, items, customer, total });

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

    console.log('📨 Backend response status:', response.status);
    console.log('📨 Backend response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Backend error response:', errorText);
      throw new Error(`Failed to confirm payment with backend: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Backend response data:', data);
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
