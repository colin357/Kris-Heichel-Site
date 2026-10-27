// Mortgage glossary: one page per term at /glossary/<slug>.
// `def` is the one-sentence answer shown first (and used in DefinedTerm schema).
export const TERMS = [
  {
    slug: 'pmi', term: 'Private Mortgage Insurance (PMI)',
    def: 'PMI is insurance that protects the lender when you put less than 20% down on a conventional loan; you pay it, usually as part of your monthly payment.',
    body: ['PMI is what makes low-down-payment conventional loans possible. Its cost depends mainly on your credit score and down payment: the stronger both are, the cheaper it is.', 'You can ask your servicer to cancel PMI once your balance reaches 80% of the home’s original value, and it ends automatically at 78% if you’re current on payments. If your home has gained value, a refinance or new appraisal may remove it sooner.'],
    example: 'On a $300,000 home with 5% down, PMI might add a modest amount to your monthly payment, but it lets you buy years sooner than saving a full 20%.',
    related: ['mip', 'ltv', 'down-payment'], loans: [['/conventional', 'Conventional loans']],
  },
  {
    slug: 'mip', term: 'Mortgage Insurance Premium (MIP)',
    def: 'MIP is the mortgage insurance on FHA loans: an upfront premium paid at closing (usually financed into the loan) plus an annual premium included in your monthly payment.',
    body: ['Unlike conventional PMI, FHA mortgage insurance doesn’t cancel when you reach 20% equity. With less than 10% down it lasts for the life of the loan; with 10% or more down it ends after 11 years.', 'Many FHA borrowers refinance into a conventional loan once they have enough equity, which removes MIP.'],
    related: ['pmi', 'fha-loan'], loans: [['/fha', 'FHA loans']],
  },
  {
    slug: 'dti', term: 'Debt-to-Income Ratio (DTI)',
    def: 'DTI is the share of your gross monthly income that goes to monthly debt payments, including your new mortgage payment; lenders use it to judge what you can afford.',
    body: ['To calculate it, add up monthly payments such as your future house payment, car loans, student loans, minimum credit card payments and child support, then divide by your pre-tax monthly income.', 'Acceptable DTI depends on the loan program and the rest of your file. Paying down a card or a small installment loan before you apply can sometimes improve your ratio enough to qualify for more.'],
    example: 'If you earn $6,000 a month before taxes and your new house payment plus other debts total $2,400, your DTI is 40%.',
    related: ['pre-approval', 'underwriting'], loans: [['/loan-programs', 'Compare loan programs']],
  },
  {
    slug: 'escrow', term: 'Escrow Account',
    def: 'An escrow account is held by your loan servicer to collect part of your property taxes and homeowners insurance with each mortgage payment and pay those bills for you when they’re due.',
    body: ['Your monthly payment is often described as PITI: principal, interest, taxes and insurance. The taxes and insurance portion goes into escrow.', 'Servicers review escrow once a year. If your taxes or insurance go up, your payment adjusts even on a fixed-rate loan; any surplus is refunded and any shortage is spread over the next year.'],
    related: ['piti', 'closing-costs'], loans: [['/fixed-rate', 'Fixed-rate mortgages']],
  },
  {
    slug: 'piti', term: 'PITI',
    def: 'PITI stands for principal, interest, taxes and insurance, the four parts of a typical monthly mortgage payment.',
    body: ['Principal pays down your loan balance and interest is the cost of borrowing. Taxes and insurance are usually collected through escrow. If you have PMI, MIP or HOA dues, those are added on top.', 'Lenders use your full PITI payment, not just principal and interest, when calculating your debt-to-income ratio.'],
    related: ['escrow', 'dti', 'pmi'], loans: [['/loan-process', 'Our loan process']],
  },
  {
    slug: 'rate-buydown', term: 'Rate Buydown',
    def: 'A rate buydown means paying extra money upfront, through discount points or seller or builder credits, to get a lower interest rate either permanently or for the first year or two.',
    body: ['A permanent buydown uses discount points to lower the rate for the life of the loan. A temporary buydown, like a 2-1 buydown, lowers the rate for the first two years and is often paid for by a seller or builder.', 'Whether it’s worth it comes down to break-even: divide the upfront cost by the monthly savings to see how many months it takes to come out ahead, then compare that with how long you expect to keep the loan.'],
    related: ['discount-points', 'apr', 'rate-lock'], loans: [['/schedule', 'Ask us to run your break-even']],
  },
  {
    slug: 'discount-points', term: 'Discount Points',
    def: 'Discount points are optional fees paid at closing to lower your interest rate; one point equals 1% of the loan amount.',
    body: ['How much each point lowers your rate changes with the market. Points make the most sense when you plan to keep the loan long enough to recover the upfront cost through lower payments.', 'Points can sometimes be paid by the seller as part of negotiated closing cost credits.'],
    related: ['rate-buydown', 'apr', 'closing-costs'], loans: [],
  },
  {
    slug: 'apr', term: 'APR (Annual Percentage Rate)',
    def: 'APR is the yearly cost of a loan including the interest rate plus certain lender fees and points, which makes it useful for comparing loan offers side by side.',
    body: ['Your interest rate sets your monthly principal and interest payment. APR is usually a bit higher because it spreads costs like origination fees, points and mortgage insurance over the life of the loan.', 'When comparing offers, look at both: a lower rate with high fees can have a higher APR than a slightly higher rate with low fees.'],
    related: ['discount-points', 'loan-estimate'], loans: [],
  },
  {
    slug: 'ltv', term: 'Loan-to-Value Ratio (LTV)',
    def: 'LTV is your loan amount divided by the home’s appraised value or price, whichever is lower; it’s the flip side of your down payment or equity.',
    body: ['A 5% down payment means a 95% LTV. Lower LTVs usually mean better pricing, and at 80% LTV or below a conventional loan no longer needs PMI.', 'For refinances, LTV is based on the new appraisal, which is why rising home values can unlock cash-out options or PMI removal.'],
    example: 'A $240,000 loan on a $300,000 home is an 80% LTV.',
    related: ['pmi', 'appraisal', 'cash-out-refinance'], loans: [],
  },
  {
    slug: 'pre-approval', term: 'Pre-Approval',
    def: 'A pre-approval is a lender’s written statement of how much you can borrow, based on a credit check and a review of your income, asset and debt documents.',
    body: ['Sellers and agents treat a pre-approval much more seriously than a pre-qualification because it’s backed by documentation. It also tells you your real price range before you start touring.', 'A pre-approval is conditional: final approval still depends on the appraisal, the property and your finances staying the same until closing.'],
    related: ['pre-qualification', 'underwriting', 'dti'], loans: [['/loan-process', 'Our 9-step loan process']],
  },
  {
    slug: 'pre-qualification', term: 'Pre-Qualification',
    def: 'A pre-qualification is a quick estimate of what you might be able to borrow, based on information you report, usually without verifying documents.',
    body: ['It’s a useful first step for budgeting, but it carries less weight with sellers than a pre-approval because nothing has been verified yet.'],
    related: ['pre-approval'], loans: [['/schedule', 'Get started with a free consultation']],
  },
  {
    slug: 'closing-costs', term: 'Closing Costs',
    def: 'Closing costs are the fees and prepaid items due when your loan closes, such as lender and title fees, appraisal, recording fees, taxes and prepaid insurance and interest.',
    body: ['They’re separate from your down payment. Your Loan Estimate lists them within three business days of applying, and your Closing Disclosure confirms the final numbers at least three business days before closing.', 'Seller credits, lender credits and down payment assistance programs can cover some or all of them. In Minnesota, borrowers pay the 0.23% mortgage registry tax, and sellers customarily pay the 0.33% deed tax.'],
    related: ['loan-estimate', 'closing-disclosure', 'escrow'], loans: [['/dpa', 'Down payment assistance']],
  },
  {
    slug: 'loan-estimate', term: 'Loan Estimate',
    def: 'The Loan Estimate is a standard three-page form your lender must give you within three business days of applying, showing your rate, payment and estimated closing costs.',
    body: ['Because every lender uses the same form, it’s the easiest way to compare offers line by line. Look closely at the interest rate, APR, origination charges and cash to close.'],
    related: ['closing-disclosure', 'apr', 'closing-costs'], loans: [],
  },
  {
    slug: 'closing-disclosure', term: 'Closing Disclosure',
    def: 'The Closing Disclosure is the final five-page statement of your loan terms and closing costs, which you must receive at least three business days before closing.',
    body: ['Compare it with your Loan Estimate. Certain changes, such as a higher APR beyond a set tolerance or a different loan product, restart the three-day waiting period.'],
    related: ['loan-estimate', 'closing-costs'], loans: [],
  },
  {
    slug: 'rate-lock', term: 'Rate Lock',
    def: 'A rate lock is a lender’s commitment to hold a specific interest rate and points for a set period, often 30 to 60 days, while your loan is processed.',
    body: ['Locking protects you if rates rise before closing. If closing is delayed past the lock period, an extension may cost extra, so it helps to lock with enough time for your timeline.'],
    related: ['apr', 'rate-buydown'], loans: [],
  },
  {
    slug: 'appraisal', term: 'Appraisal',
    def: 'An appraisal is an independent estimate of a home’s market value by a licensed appraiser, used by the lender to make sure the loan amount is supported by the property.',
    body: ['If the appraisal comes in below the purchase price, buyers usually renegotiate, bring extra cash or, depending on the contract, walk away. FHA and VA appraisals also check basic safety and livability standards.', 'Renovation loans use an “as-completed” appraisal that estimates value after the planned improvements.'],
    related: ['ltv', 'underwriting'], loans: [['/renovation', 'Renovation loans']],
  },
  {
    slug: 'underwriting', term: 'Underwriting',
    def: 'Underwriting is the lender’s review of your credit, income, assets and the property to make the final decision on your loan.',
    body: ['The underwriter may issue a conditional approval listing items still needed, such as an updated pay stub or an explanation of a deposit. Once conditions are cleared, the loan is “clear to close.”', 'Avoid opening new credit, changing jobs or making large unexplained deposits while your loan is in underwriting.'],
    related: ['pre-approval', 'dti', 'appraisal'], loans: [['/loan-process', 'Our 9-step loan process']],
  },
  {
    slug: 'earnest-money', term: 'Earnest Money',
    def: 'Earnest money is a good-faith deposit you make when your offer is accepted, held by a title company or broker and applied toward your down payment or closing costs at closing.',
    body: ['The amount is negotiated in the purchase agreement. Whether you get it back if the deal falls through depends on the contract’s contingencies, such as financing or inspection.'],
    related: ['down-payment', 'closing-costs'], loans: [],
  },
  {
    slug: 'down-payment', term: 'Down Payment',
    def: 'The down payment is the part of the purchase price you pay upfront rather than borrow; minimums range from 0% for VA and USDA loans to 3% conventional and 3.5% FHA.',
    body: ['Putting 20% down on a conventional loan avoids PMI, but it’s not required. Gift funds from family and down payment assistance programs can cover some or all of it, depending on the program.'],
    related: ['pmi', 'ltv', 'earnest-money'], loans: [['/dpa', 'Down payment assistance'], ['/va', 'VA loans'], ['/usda', 'USDA loans']],
  },
  {
    slug: 'conforming-loan-limit', term: 'Conforming Loan Limit',
    def: 'The conforming loan limit is the largest loan Fannie Mae and Freddie Mac can buy, set each year by the FHFA; for 2026 it is $832,750 for a one-unit home in most of the country, including Southeast Minnesota.',
    body: ['Loans above the limit are called jumbo loans and follow different guidelines, usually with larger down payment and reserve requirements.'],
    related: ['ltv'], loans: [['/jumbo', 'Jumbo loans'], ['/conventional', 'Conventional loans']],
  },
  {
    slug: 'certificate-of-eligibility', term: 'Certificate of Eligibility (COE)',
    def: 'A Certificate of Eligibility is the VA document that confirms you qualify for a VA home loan and shows how much entitlement you have available.',
    body: ['Lenders can usually request your COE online in minutes. It shows whether you have full entitlement, which allows no-down-payment financing, or partial entitlement because a previous VA loan is still active.'],
    related: ['down-payment'], loans: [['/va', 'VA loans'], ['/va-benefits', 'VA renovation loans']],
  },
  {
    slug: 'dscr', term: 'DSCR (Debt Service Coverage Ratio)',
    def: 'DSCR compares a rental property’s income to its mortgage payment; DSCR loans use that ratio, instead of your personal income, to decide whether you qualify.',
    body: ['A DSCR of 1.0 means the rent exactly covers the payment; above 1.0 means the property produces more than it costs. Programs set their own minimums along with credit and reserve requirements.'],
    example: 'Rent of $2,000 a month against a $1,600 payment gives a DSCR of 1.25.',
    related: ['dti'], loans: [['/investor-builder', 'Investor & builder loans']],
  },
  {
    slug: 'hecm', term: 'HECM (Home Equity Conversion Mortgage)',
    def: 'A HECM is the FHA-insured reverse mortgage that lets homeowners 62 and older turn home equity into cash with no required monthly mortgage payment.',
    body: ['You keep title to your home and must keep paying property taxes, insurance and upkeep. The loan is repaid when the last borrower sells, moves out permanently or passes away, and neither you nor your heirs owe more than the home is worth.', 'HECM for Purchase uses the same loan to buy a new home. HUD-approved counseling is required before applying.'],
    related: ['ltv'], loans: [['/reverse-purchase', 'Reverse mortgages and HECM for Purchase']],
  },
  {
    slug: 'cash-out-refinance', term: 'Cash-Out Refinance',
    def: 'A cash-out refinance replaces your current mortgage with a larger one and pays you the difference in cash, letting you use home equity for renovations, debt payoff or other goals.',
    body: ['How much you can take out depends on the loan program’s maximum LTV and your new appraisal. Because it replaces your whole loan, compare your new rate with your current one; a home equity loan or line of credit may cost less if your existing rate is low.'],
    related: ['ltv', 'appraisal'], loans: [['/equity-analysis-plan', 'Free home equity analysis']],
  },
];

export const termBySlug = Object.fromEntries(TERMS.map((t) => [t.slug, t]));
