'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Free', monthly: '0', annual: '0', yearly: '0', credits: '0', parallel: 'custom videos, custom images', advanced: false },
  { name: 'Starter', monthly: '9', annual: '7.20', yearly: '86.40', credits: '150', parallel: '2 videos, 4 images', advanced: false },
  { name: 'Pro', monthly: '49', annual: '39.20', yearly: '470.40', credits: '1,000', parallel: '6 videos, 8 images', advanced: true },
  { name: 'Scale', monthly: '119', annual: '95.20', yearly: '1,142.40', credits: '3,000', parallel: '8 videos, 16 images', advanced: true },
  { name: 'Enterprise', monthly: null, annual: null, yearly: null, credits: 'Custom', parallel: 'custom videos, custom images', advanced: true },
];

export function PricingPlans() {
  const [annual, setAnnual] = useState(false);
  return <>
    <fieldset className="billing-switch" aria-label="Billing period">
      <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>Monthly</button>
      <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>Annual <span>20% OFF</span></button>
    </fieldset>
    <div className="pricing-grid" aria-live="polite">
      {plans.map(plan => {
        const popular = plan.name === 'Pro';
        const enterprise = plan.monthly === null;
        const discounted = annual && !enterprise && plan.name !== 'Free';
        const features = ['Workspace & Collaboration', 'Up to custom seats', `Parallel Generation: ${plan.parallel}`, 'Real-time Collaboration Workspace', ...(plan.advanced ? ['Credit allocation', 'Analytics'] : [])];
        return <article key={plan.name} className={`price-card${popular ? ' price-card-popular' : ''}`} aria-labelledby={`plan-${plan.name}`}>
          {popular && <div className="popular-banner">Most popular</div>}
          <div className="price-card-body">
            <div className="plan-name"><h2 id={`plan-${plan.name}`}>{plan.name}</h2>{discounted && <span className="discount-badge">20% OFF</span>}</div>
            <p className={`plan-price${enterprise ? ' custom-price' : ''}`}>{enterprise ? 'Custom pricing' : <>${annual ? plan.annual : plan.monthly}<span> / mo</span></>}</p>
            {discounted && <p className="original-price"><s>${plan.monthly} / mo</s></p>}
            {annual && !enterprise && <p className="annual-total">Billed annually, ${plan.yearly} / year</p>}
            <p className="plan-credits">{enterprise ? 'Custom credits' : `${plan.credits} credits / month`}</p>
            <a className="pricing-button" href="https://www.maxday.ai/login" aria-label={`${enterprise ? 'Contact Sales' : 'Subscribe'} — ${plan.name}`}>{enterprise ? 'Contact Sales' : 'Subscribe'}</a>
            <p className="plan-description">{enterprise ? 'Custom onboarding, compliance, and dedicated generation capacity.' : `${plan.credits} credits monthly with workspace seats and pooled generation capacity.`}</p>
            <div className="plan-features"><h3>Workspace &amp; Collaboration</h3><ul>{features.map(feature => <li key={feature}><Check size={18} aria-hidden="true" /><span>{feature}</span></li>)}</ul></div>
          </div>
        </article>;
      })}
    </div>
  </>;
}
