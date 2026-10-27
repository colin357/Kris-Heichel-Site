// Local "mortgage lender in <city>" pages. Every number below was checked against the source
// linked next to it (research done October 2026). Update the figures and `asOf` dates together.

export const SOURCES = {
  census: ['U.S. Census Bureau, Vintage 2025 population estimates (July 1, 2025)', 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025.csv'],
  zillow: ['Zillow Home Value Index (ZHVI), all homes, September 2026', 'https://www.zillow.com/research/data/'],
  fhfa: ['FHFA 2026 conforming loan limits', 'https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026'],
  hud: ['HUD FHA mortgage limits, calendar year 2026', 'https://entp.hud.gov/idapp/html/hicostlook.cfm'],
  usda: ['USDA Rural Development property eligibility map', 'https://eligibility.sc.egov.usda.gov'],
  mnhousing: ['Minnesota Housing homebuyer programs', 'https://www.mnhousing.gov/home/homeownership/buy-home-refinance'],
  mnhousingDpa: ['Minnesota Housing down payment loan comparison (July 1, 2026)', 'https://www.mnhousing.gov/get/MHFA_013282'],
  firstgen: ['Forgivable First Generation Homebuyers Community Down Payment Assistance Fund', 'https://firstgendpa.org/'],
  mnrealtors: ['Minnesota Realtors: First-Gen DPA update (Sept. 8, 2026)', 'https://my.mnrealtor.com/find-it-fast/first-gen-dpa'],
  taxes: ['Minnesota Department of Revenue: mortgage registry and deed tax', 'https://www.revenue.state.mn.us/mortgage-registry-and-deed-tax'],
};

export const LIMITS_2026 = { conforming: '$832,750', fha: '$541,287' };

// Statewide programs that apply in every city page.
export const MN_PROGRAMS = [
  ['Start Up (Minnesota Housing)', 'First-mortgage program for first-time buyers, with income and purchase price limits by county. Homebuyer education is required.'],
  ['Step Up (Minnesota Housing)', 'For repeat buyers, or first-time buyers above Start Up limits; also offers Step Up Refinance.'],
  ['Monthly Payment Loan', 'Up to $14,000 for down payment and closing costs, repaid over 15 years at the first-mortgage rate. Paired with Start Up or Step Up.'],
  ['Deferred Payment Loan / Deferred Payment Loan Plus', 'Up to $14,000 (or $18,000 for DPL Plus) at 0% interest, repaid when you sell, refinance or pay off the home. Start Up buyers only, with extra eligibility criteria.'],
  ['First-Generation Homebuyers Down Payment Assistance Fund', 'A forgivable 0% loan of up to 10% of the price, capped at $32,000, forgiven 20% per year over five years. It reopened with limited applications in September 2026 and may pause again.'],
];

export const CITIES = [
  {
    slug: 'rochester-mn',
    city: 'Rochester',
    county: 'Olmsted County',
    office: 'Rochester Office, 3273 19th St NW, Ste 3',
    photo: 'rochester-skyline',
    population: '124,292',
    countyPop: '166,731',
    homeValue: '$340,589',
    homeValueNote: 'up from $329,052 a year earlier',
    employers: 'Mayo Clinic (about 50,000 employees), Rochester Public Schools, IBM and Olmsted Medical Center',
    employersSource: ['RAEDI 2025 Community Profile', 'https://www.raedi.com/wp-content/uploads/2025-Community-Profile-2.pdf'],
    usda: 'Rochester itself is not USDA-eligible, but nearby towns such as Kasson, Byron and Stewartville can be. Check a specific address on the USDA map.',
    usdaShort: 'Not in city limits; nearby towns like Kasson, Byron and Stewartville can qualify',
    nearby: ['Byron', 'Kasson', 'Stewartville', 'Pine Island', 'Oronoco', 'Chatfield', 'Dodge Center'],
    programs: [
      ['First Homes (Rochester Area Foundation)', 'Community land trust homes sold below market in Rochester and about a dozen nearby towns. You own the house and lease the land; household income must be at or below 80% of area median income, and down payment help is available.', 'https://www.firsthomes.org/'],
      ['Three Rivers Community Action — Achieve Homeownership', 'Homebuyer education, one-on-one counseling and down payment and closing cost assistance, with an office in Rochester.', 'https://www.threeriverscap.org/housing/achieve-homeownership/'],
      ['Olmsted County HRA — GAIN', 'Started as a $10,000 forgivable buyer loan; the 2026 round funds developers building affordable for-sale homes rather than individual buyers. Ask us what’s open when you’re ready.', 'https://www.olmstedcounty.gov/residents/services-individuals-families/housing/growing-affordable-inclusive-neighborhoods-gain'],
    ],
    intro: 'Rochester is the largest city in Southeast Minnesota and home to our Rochester office. Mayo Clinic is by far the largest employer, so many buyers here are relocating medical professionals who need a lender that understands offer letters, residency income and tight move-in dates, plus a fast, confident pre-approval to compete for well-priced homes.',
    tips: ['Get fully pre-approved before you tour; well-priced Rochester homes can draw multiple offers.', 'Relocating for Mayo Clinic? We can often qualify you on a signed offer letter before your start date.', 'Compare Minnesota Housing’s Start Up program with conventional 3% down — the better choice depends on your income and price range.'],
    faqs: [
      ['What is the average home price in Rochester, MN?', 'Zillow’s typical home value for Rochester was $340,589 in September 2026, up from $329,052 a year earlier. Prices vary a lot by neighborhood and home type.'],
      ['Can I use a USDA loan in Rochester, MN?', 'Not within Rochester’s city limits, which aren’t USDA-eligible. Many surrounding towns, such as Kasson, Byron and Stewartville, can be eligible. Send us an address and we’ll check it.'],
      ['What are the 2026 loan limits in Olmsted County?', 'The 2026 conforming loan limit for a one-unit home in Olmsted County is $832,750, and the FHA limit is $541,287. Above $832,750 you’d need a jumbo loan.'],
      ['Is there down payment assistance in Rochester, MN?', 'Yes. Options include Minnesota Housing’s Monthly Payment and Deferred Payment Loans, the state First-Generation fund, First Homes through the Rochester Area Foundation, and Three Rivers Community Action. We’ll help you see which ones you qualify for.'],
      ['Can I get a mortgage before I start my job at Mayo Clinic?', 'Often, yes. Many loan programs allow us to use a signed, non-contingent offer letter for income when you start within a set window after closing. Talk with us early so we can structure it correctly.'],
    ],
  },
  {
    slug: 'austin-mn',
    city: 'Austin',
    county: 'Mower County',
    office: 'Austin Office, 1403 15th Avenue Northwest',
    photo: 'austin-autumn-street',
    population: '26,689',
    countyPop: '40,971',
    homeValue: '$187,648',
    homeValueNote: '',
    employers: 'Hormel Foods (world headquarters and Austin plant), The Hormel Institute (University of Minnesota) and Mayo Clinic Health System',
    employersSource: ['Hormel Foods: Our Hometown', 'https://www.hormelfoods.com/careers/our-culture/our-hometown/'],
    usda: 'Most of Austin’s city limits are not USDA-eligible, but areas just outside the city and the small towns around it often are. Check a specific address on the USDA map.',
    usdaShort: 'Not in most of the city; surrounding towns often qualify',
    nearby: ['Adams', 'Blooming Prairie', 'Brownsdale', 'Grand Meadow', 'Hayfield', 'Lyle', 'Rose Creek', 'Le Roy'],
    programs: [
      ['Austin/Mower County Home Ownership Fund', 'Created by the City of Austin and Mower County in 1997. Low- and moderate-income buyers anywhere in Mower County can borrow up to $8,000 at 2% for down payment and closing costs. Kris serves on the fund’s board.', 'https://www.ci.austin.mn.us/administration/home-ownership-fund'],
      ['Three Rivers Community Action homebuyer education', 'Homebuyer workshops and counseling for Mower County residents; often required for down payment programs.', 'https://www.threeriverscap.org/housing/achieve-homeownership/'],
    ],
    intro: 'Austin is home to our Austin office and to Hormel Foods’ world headquarters. Prices here are well below the Rochester market, which makes Austin a great fit for first-time buyers using FHA, Minnesota Housing or the Austin/Mower County Home Ownership Fund.',
    tips: ['Ask about stacking the Austin/Mower County Home Ownership Fund with Minnesota Housing assistance.', 'Austin’s lower prices make 15- or 20-year fixed terms more affordable than you might think.', 'Older homes near downtown can be great candidates for a renovation loan.'],
    faqs: [
      ['What is the average home price in Austin, MN?', 'Zillow’s typical home value for Austin was $187,648 in September 2026, well below the Rochester market.'],
      ['Is there down payment assistance in Austin, MN?', 'Yes. The Austin/Mower County Home Ownership Fund offers low- and moderate-income buyers up to $8,000 at 2% for down payment and closing costs, and it can often be combined with Minnesota Housing programs and the state First-Generation fund.'],
      ['Are homes in Austin, MN USDA-eligible?', 'Most of Austin’s city limits aren’t USDA-eligible, but areas just outside town and nearby small towns often are. We can check any address for you.'],
      ['What are the 2026 loan limits in Mower County?', 'The 2026 conforming loan limit in Mower County is $832,750 for a one-unit home, and the FHA limit is $541,287.'],
      ['Where is The Heichel Team’s Austin office?', 'Our Austin office is at 1403 15th Avenue Northwest, Austin, MN 55912. Call 507.460.4500, Monday–Friday 8am–8pm.'],
    ],
  },
  {
    slug: 'albert-lea-mn',
    city: 'Albert Lea',
    county: 'Freeborn County',
    office: 'Austin Office, about 20 miles east on I-90',
    photo: 'albert-lea-fountain-lake',
    population: '18,217',
    countyPop: '30,440',
    homeValue: '$180,520',
    homeValueNote: '',
    employers: 'Mayo Clinic Health System, Minnesota Corrugated Box and Interstate Packaging, among others',
    employersSource: ['Albert Lea EDA strategic plan (2019)', 'https://growalbertlea.com/wp-content/uploads/2019/11/Albert-Lea-EDA-Economic-Development-Strategic-Plan-Interim-Report-Super-Summary.pdf'],
    usda: 'Albert Lea tested as USDA-eligible on the USDA map, which can mean zero-down financing for eligible buyers. Eligibility is set address by address, so we’ll confirm yours.',
    usdaShort: 'Generally eligible; confirm each address',
    nearby: ['Glenville', 'Hollandale', 'Clarks Grove', 'Hayward', 'Alden', 'Twin Lakes', 'Emmons'],
    programs: [
      ['Three Rivers Community Action homebuyer education', 'Homebuyer workshops and counseling that serve Freeborn County buyers.', 'https://www.threeriverscap.org/housing/achieve-homeownership/'],
    ],
    noLocalProgram: 'We didn’t find a city or Freeborn County down payment program for buyers, so Albert Lea buyers typically use Minnesota Housing, the state First-Generation fund, USDA or FHA.',
    intro: 'Albert Lea, the Land of Lakes, sits along I-90 about 20 miles west of our Austin office. With typical home values under $200,000 and USDA eligibility in much of the area, it’s one of the most affordable places in Southeast Minnesota to buy.',
    tips: ['Check USDA first: if the address qualifies, you may be able to buy with no down payment.', 'Lakefront and lake-view homes can need renovation; a HomeStyle® or 203(k) loan can cover both.', 'Pair FHA with Minnesota Housing assistance if your credit is still building.'],
    faqs: [
      ['What is the average home price in Albert Lea, MN?', 'Zillow’s typical home value for Albert Lea was $180,520 in September 2026.'],
      ['Can I get a USDA loan in Albert Lea, MN?', 'Often, yes. Albert Lea tested as USDA-eligible on the USDA map, and USDA loans allow eligible buyers to purchase with no down payment. Eligibility is confirmed address by address and income limits apply.'],
      ['Does The Heichel Team lend in Albert Lea?', 'Yes. We serve Albert Lea and Freeborn County from our Austin office, about 20 miles away, and we can handle your whole loan online or in person.'],
      ['What are the 2026 loan limits in Freeborn County?', 'The 2026 conforming loan limit for a one-unit home in Freeborn County is $832,750 and the FHA limit is $541,287.'],
    ],
  },
  {
    slug: 'owatonna-mn',
    city: 'Owatonna',
    county: 'Steele County',
    office: 'Rochester and Austin offices, plus online',
    photo: 'owatonna-cedar-avenue',
    population: '26,633',
    countyPop: '37,464',
    homeValue: '$295,050',
    homeValueNote: '',
    employers: 'Federated Insurance (headquartered in Owatonna), Viracon, Bosch, Jostens and Daikin',
    employersSource: ['University of Minnesota: Owatonna', 'https://www.pharmacy.umn.edu/doctor-pharmacy/owatonna'],
    usda: 'Owatonna tested as USDA-eligible at the city center, as did nearby Blooming Prairie. Eligibility is set address by address, so we’ll confirm yours.',
    usdaShort: 'Generally eligible; confirm each address',
    nearby: ['Medford', 'Blooming Prairie', 'Ellendale', 'Clinton Falls', 'Faribault', 'Waseca'],
    programs: [
      ['Three Rivers Community Action homebuyer education', 'Homebuyer workshops and counseling that serve Steele County buyers.', 'https://www.threeriverscap.org/housing/achieve-homeownership/'],
    ],
    noLocalProgram: 'We didn’t find a city or Steele County down payment program for buyers (the Owatonna HRA focuses on repair loans and rental help), so Owatonna buyers typically use Minnesota Housing, the state First-Generation fund, USDA or FHA.',
    intro: 'Owatonna is a manufacturing and insurance hub on I-35, with Federated Insurance headquartered downtown. Home values sit between Austin and Rochester, and USDA eligibility in much of the area opens up zero-down options.',
    tips: ['Check USDA eligibility before assuming you need a down payment.', 'Commuting to the Twin Cities or Rochester? We’ll help you weigh price against drive time with real payment numbers.', 'Steady local employers make conventional 3%-down loans a strong option for many first-time buyers.'],
    faqs: [
      ['What is the average home price in Owatonna, MN?', 'Zillow’s typical home value for Owatonna was $295,050 in September 2026.'],
      ['Can I get a USDA loan in Owatonna, MN?', 'Often, yes. Owatonna tested as USDA-eligible on the USDA map, which can mean no down payment for eligible buyers within the income limits. We’ll confirm your specific address.'],
      ['Does The Heichel Team lend in Owatonna?', 'Yes. We help Owatonna and Steele County buyers from our Rochester and Austin offices and online, with the same local service and fast closings.'],
      ['What are the 2026 loan limits in Steele County?', 'The 2026 conforming loan limit for a one-unit home in Steele County is $832,750 and the FHA limit is $541,287.'],
    ],
  },
];

// Minnesota-wide questions, used on the home page and every city page.
export const MN_FAQS = [
  ['What down payment assistance is available in Minnesota in 2026?', 'Minnesota Housing offers Start Up and Step Up first mortgages paired with a Monthly Payment Loan (up to $14,000) or a 0% Deferred Payment Loan (up to $14,000, or $18,000 with DPL Plus). The state’s First-Generation Homebuyers fund offers up to $32,000 forgivable over five years and reopened with limited applications in September 2026. Local programs vary by city.'],
  ['What are the 2026 loan limits in Southeast Minnesota?', 'For a one-unit home in Olmsted, Mower, Freeborn and Steele counties, the 2026 conforming loan limit is $832,750 and the FHA limit is $541,287. Loans above $832,750 are jumbo loans.'],
  ['Who pays deed tax and mortgage registry tax in Minnesota?', 'Minnesota’s deed tax is 0.33% of the sale price and is customarily paid by the seller, though a purchase agreement can shift it. The mortgage registry tax is 0.23% of the loan amount and is paid by the borrower at closing.'],
  ['Which Southeast Minnesota towns does The Heichel Team serve?', 'We serve all of Southeast Minnesota from our Rochester and Austin offices, including Rochester, Austin, Albert Lea, Owatonna, Byron, Kasson, Stewartville, Dodge Center and surrounding towns, and we’re licensed in CO, MN, IA, WI, SD, AZ and MI.'],
];
