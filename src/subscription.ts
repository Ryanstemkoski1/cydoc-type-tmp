import stripe from 'stripe';

export interface SubscriptionInfo {
    isSubscribed: boolean;
    stripeCustomer: stripe.Customer | null;
    monthlyCost: number;
    trialEndsAt: number;
}
