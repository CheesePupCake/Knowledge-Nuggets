// ============================================================
// Insurance Knowledge Nuggets — Quiz Data
// Add or edit quizzes here. Each quiz object follows this schema.
// ============================================================

const QUIZ_LIBRARY = [
  {
    id: "cgl-fundamentals",
    title: "Commercial General Liability",
    subtitle: "Coverage structure, triggers, exclusions & limits",
    icon: "🏢",
    category: "Liability",
    difficulty: "Intermediate",
    questions: [
      {
        q: "Which of the following best describes the 'occurrence' trigger under a standard CGL policy?",
        options: [
          "The date the claim is first reported to the insurer",
          "An accident, including continuous or repeated exposure to substantially the same harmful conditions",
          "The date a lawsuit is filed against the insured",
          "The date the policy was first issued"
        ],
        answer: 1,
        feedback: [
          "Incorrect. The reporting date is relevant to claims-made policies, not the occurrence trigger.",
          "Correct! CGL policies define 'occurrence' as an accident, including continuous or repeated exposure to the same harmful conditions — the foundational coverage trigger.",
          "Incorrect. The lawsuit filing date is a procedural milestone, not the occurrence itself.",
          "Incorrect. The policy issuance date has no bearing on when an occurrence is deemed to have happened."
        ],
        key: "An accident, including continuous or repeated exposure to substantially the same harmful conditions (ISO CGL definition)."
      },
      {
        q: "Coverage A of the standard CGL policy covers which of the following?",
        options: [
          "Personal and Advertising Injury",
          "Medical Payments",
          "Bodily Injury and Property Damage Liability",
          "Professional Liability"
        ],
        answer: 2,
        feedback: [
          "Incorrect. Personal and Advertising Injury is Coverage B of the CGL policy.",
          "Incorrect. Medical Payments are provided under Coverage C of the CGL policy.",
          "Correct! Coverage A of the CGL policy specifically addresses Bodily Injury (BI) and Property Damage (PD) Liability.",
          "Incorrect. Professional Liability is not a standard CGL coverage; it requires a separate policy or endorsement."
        ],
        key: "Bodily Injury and Property Damage Liability (Coverage A, ISO CGL form)."
      },
      {
        q: "Which CGL exclusion eliminates coverage for damage to the insured's own work after it has been completed?",
        options: [
          "Contractual liability exclusion",
          "Your product exclusion",
          "Your work exclusion",
          "Impaired property exclusion"
        ],
        answer: 2,
        feedback: [
          "Incorrect. The contractual liability exclusion addresses assumed liability under contracts, not faulty completed work.",
          "Incorrect. The 'your product' exclusion applies to the product itself, not the work performed.",
          "Correct! The 'your work' exclusion eliminates coverage for property damage to the insured's own completed work — one of the five business risk exclusions.",
          "Incorrect. The impaired property exclusion applies to third-party property that can no longer be used because of the insured's defective work or product."
        ],
        key: "'Your work' exclusion removes coverage for damage to the named insured's own completed operations."
      },
      {
        q: "The CGL general aggregate limit applies to all of the following EXCEPT:",
        options: [
          "Bodily injury claims from premises operations",
          "Personal and advertising injury claims",
          "Products-completed operations claims",
          "Property damage claims from premises operations"
        ],
        answer: 2,
        feedback: [
          "Incorrect. Bodily injury from premises operations does erode the general aggregate.",
          "Incorrect. Personal and advertising injury claims fall under the general aggregate.",
          "Correct! Products and completed operations claims are subject to a separate products-completed operations aggregate.",
          "Incorrect. Property damage from premises operations is subject to the general aggregate limit."
        ],
        key: "Products-completed operations losses deplete the products-completed operations aggregate, which is separate from the general aggregate."
      },
      {
        q: "Under Coverage C — Medical Payments, payments are made:",
        options: [
          "Only after legal liability of the insured is established",
          "Regardless of legal liability, as a goodwill/no-fault payment",
          "Only to employees of the named insured",
          "Only when the bodily injury occurs on the insured's premises"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Coverage C is a no-fault medical payment coverage — no finding of liability is required.",
          "Correct! Medical Payments are paid on a no-fault goodwill basis to injured third parties, without requiring proof of the insured's negligence.",
          "Incorrect. Employees are excluded from Coverage C — their injuries fall under workers' compensation.",
          "Incorrect. Coverage C can apply to injuries from operations away from premises as well."
        ],
        key: "Coverage C medical payments are no-fault; no liability determination is needed."
      },
      {
        q: "The 'separation of insureds' condition in the CGL means:",
        options: [
          "Each insured must carry a separate policy",
          "The policy applies separately to each insured as if they were the only insured, except for the limits",
          "Claims involving two insureds on the same policy are excluded",
          "Named insureds and additional insureds receive different aggregate limits"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Separation of insureds does not require separate policies.",
          "Correct! The separation of insureds provision treats each insured independently for coverage purposes, allowing one insured to be covered even when another is the claimant.",
          "Incorrect. The provision facilitates coverage in insured-vs-insured scenarios rather than excluding them.",
          "Incorrect. Limits are shared across all insureds; the separation applies to coverage analysis only."
        ],
        key: "The policy applies as if each insured were separately insured, with shared (not separate) limits."
      },
      {
        q: "Which of the following correctly describes the 'products-completed operations hazard'?",
        options: [
          "Covers only manufacturing defects in tangible goods",
          "Applies to BI/PD arising from the insured's products or completed work, away from the insured's premises",
          "Covers BI/PD arising from ongoing operations at the job site",
          "Applies only to products sold to other businesses, not consumers"
        ],
        answer: 1,
        feedback: [
          "Incorrect. The hazard covers both products AND completed operations, not just manufacturing defects.",
          "Correct! The products-completed operations hazard covers BI/PD arising from the insured's products or completed work — critically, after the work or product has left the insured's control.",
          "Incorrect. Ongoing operations at the job site fall under premises and operations coverage.",
          "Incorrect. There is no consumer vs. business distinction in the definition."
        ],
        key: "BI/PD from products/completed work away from the insured's premises and after possession/completion."
      },
      {
        q: "The contractual liability exclusion in the CGL excepts (restores coverage for) which type of contracts?",
        options: [
          "All written contracts",
          "Insured contracts as defined in the policy",
          "Verbal agreements between the insured and a third party",
          "Contracts with governmental entities only"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Not all written contracts qualify — only those meeting the specific definition of 'insured contract.'",
          "Correct! The exclusion contains an exception for 'insured contracts' — a defined term that includes leases, easements, railroad sidetrack agreements, and certain work performance contracts.",
          "Incorrect. Verbal agreements are generally not recognized as 'insured contracts' under the CGL definition.",
          "Incorrect. Government contracts are not the defining criterion."
        ],
        key: "'Insured contracts' as defined in the CGL (leases, sidetrack agreements, construction contracts with hold-harmless provisions, etc.)."
      },
      {
        q: "An additional insured endorsement on a CGL policy typically extends coverage to the additional insured for:",
        options: [
          "The additional insured's own independent negligence",
          "Liability arising out of the named insured's operations",
          "Completed operations claims only",
          "All covered claims without restriction"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Standard AI endorsements do not cover the additional insured's sole negligence.",
          "Correct! Standard AI endorsements (ISO CG 20 10) extend coverage to the additional insured only for liability arising out of the named insured's operations.",
          "Incorrect. Some endorsements cover ongoing operations; others cover completed operations — neither is universally limited to one.",
          "Incorrect. AI coverage has specific limitations and does not replicate full named-insured coverage."
        ],
        key: "Additional insureds are covered for liability arising from the named insured's operations (CG 20 10 / CG 20 37)."
      },
      {
        q: "Under the CGL, 'property damage' is defined as:",
        options: [
          "Only physical injury to tangible property",
          "Physical injury to tangible property, OR loss of use of tangible property that is not physically injured",
          "Economic loss resulting from the insured's work",
          "Damage to any property, tangible or intangible"
        ],
        answer: 1,
        feedback: [
          "Incorrect. This definition is incomplete — it omits the important 'loss of use' prong.",
          "Correct! The ISO CGL defines 'property damage' with two prongs: physical injury to tangible property AND loss of use of tangible property that has not been physically injured.",
          "Incorrect. Pure economic loss without physical injury is generally not 'property damage' under the CGL.",
          "Incorrect. The CGL definition is limited to tangible property; intangible property is not included without endorsement."
        ],
        key: "Physical injury to tangible property OR loss of use of tangible property that is not physically injured."
      }
    ]
  },
  {
    id: "commercial-property",
    title: "Commercial Property",
    subtitle: "Causes of loss, valuation, coinsurance & key provisions",
    icon: "🏗️",
    category: "Property",
    difficulty: "Intermediate",
    questions: [
      {
        q: "Under the ISO Building and Personal Property (BPP) Coverage Form, 'business personal property' includes all of the following EXCEPT:",
        options: [
          "Furniture and fixtures owned by the insured",
          "The insured's inventory",
          "The building itself",
          "Labor, materials, or services furnished or arranged by the insured on personal property of others"
        ],
        answer: 2,
        feedback: [
          "Incorrect. Furniture and fixtures are specifically included in the BPP definition.",
          "Incorrect. Inventory is a core component of business personal property.",
          "Correct! The building is a separate coverage item under the BPP form. It is not part of 'business personal property' — building and BPP are distinct coverage options.",
          "Incorrect. Labor and materials applied to others' property is included in BPP coverage."
        ],
        key: "The building itself is insured separately; BPP covers contents and certain personal property items."
      },
      {
        q: "The coinsurance clause in a commercial property policy penalizes the insured when:",
        options: [
          "The insured files more than one claim per year",
          "The insured carries less insurance than the required percentage of the property's value",
          "The insured fails to notify the insurer within 72 hours of a loss",
          "The insured's deductible is below the policy minimum"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Frequency of claims is not the basis for a coinsurance penalty.",
          "Correct! The coinsurance penalty applies when the amount of insurance carried is less than the required percentage (typically 80%) of the property's full value at the time of loss, resulting in the insured becoming a co-insurer for the deficiency.",
          "Incorrect. Notice requirements may affect claims handling but are not related to coinsurance.",
          "Incorrect. Deductible levels are independent of the coinsurance requirement."
        ],
        key: "Coinsurance penalty triggers when coverage carried is less than the required % of property value (typically 80%)."
      },
      {
        q: "Which valuation method pays the cost to repair or replace damaged property with new property of like kind and quality, without deduction for depreciation?",
        options: [
          "Actual cash value (ACV)",
          "Replacement cost value (RCV)",
          "Functional replacement cost",
          "Agreed value"
        ],
        answer: 1,
        feedback: [
          "Incorrect. ACV deducts depreciation from replacement cost — it does not pay full replacement cost.",
          "Correct! Replacement cost value pays to repair or replace with new property of like kind and quality, with no depreciation deduction.",
          "Incorrect. Functional replacement cost replaces with less costly but functionally equivalent property — typically used for older specialized buildings.",
          "Incorrect. Agreed value is a method that suspends the coinsurance clause; it may or may not use RCV."
        ],
        key: "Replacement cost value (RCV) — no depreciation deduction; new for old."
      },
      {
        q: "The Causes of Loss — Special Form covers property losses on what basis?",
        options: [
          "Named perils only — only specifically listed causes of loss are covered",
          "Open perils (all-risk) — all causes of loss are covered except those specifically excluded",
          "Named perils plus flood and earthquake by default",
          "Only fire and lightning"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Named perils coverage is the Basic and Broad Forms, not the Special Form.",
          "Correct! The Special Form uses an open-perils (all-risk) approach — coverage applies unless the cause of loss is specifically excluded.",
          "Incorrect. Flood and earthquake are standard exclusions even under the Special Form.",
          "Incorrect. Fire and lightning alone would be an extremely narrow coverage — not the Special Form approach."
        ],
        key: "Special Form = open perils / all-risk — covered unless specifically excluded."
      },
      {
        q: "Business Income coverage under a commercial property policy is designed to cover:",
        options: [
          "The cost to rebuild the damaged property",
          "Lost net income and continuing normal operating expenses during the period of restoration",
          "Employee wages only, during a shutdown",
          "Extra expenses incurred to avoid or minimize the business income loss"
        ],
        answer: 1,
        feedback: [
          "Incorrect. Rebuilding costs are covered under the building/BPP coverage, not Business Income.",
          "Correct! Business Income coverage replaces the net income the business would have earned, plus pays continuing normal operating expenses (including payroll) during the period of restoration.",
          "Incorrect. Wages are one component of continuing expenses, but Business Income coverage is broader.",
          "Incorrect. Extra expense coverage is a separate (though related) coverage option, not the definition of Business Income."
        ],
        key: "Business Income = lost net income + continuing normal operating expenses during the restoration period."
      }
    ]
  },
];
