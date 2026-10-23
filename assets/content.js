window.SKILLPOINT_CONTENT = {
  frameworks: {
    physics: {
      intro: 'Build the model from named quantities, directions and assumptions. Link words, diagrams, graphs and equations rather than memorising isolated facts.',
      method: ['Sketch and label the physical situation.', 'Choose a positive direction and write the governing principle.', 'Convert to SI units before substitution.', 'Keep extra figures until the final answer and finish with a unit and direction where required.'],
      exam: 'For an explanation, state the physical change, name the governing relationship, then give the consequence. For a calculation, show the equation before numbers.',
      trap: 'A correct number without working, units, sign convention or direction can lose accessible marks.'
    },
    chemistry: {
      intro: 'Connect the macroscopic observation to particles and then to a balanced symbolic representation. Conditions, state symbols and observations matter.',
      method: ['Identify the reacting species and the demanded quantity.', 'Write a balanced equation or particle model.', 'Apply mole ratios or the named chemical principle.', 'Check significant figures, units, conditions and state symbols.'],
      exam: 'Use precise chemical vocabulary. Explanations should move from structure or particles to bonding, energy or reactivity and finally to the observation.',
      trap: 'Do not replace a required explanation with a trend statement or an unbalanced equation.'
    },
    biology: {
      intro: 'Link structure to function and follow matter, energy or information through the named biological process. Use only the structures and mechanisms required by the syllabus.',
      method: ['Name the relevant structure or molecule.', 'State the process and its direction.', 'Explain the mechanism as a causal sequence.', 'Connect the mechanism to its biological outcome.'],
      exam: 'Use biological terms accurately and answer at the requested level: organ, tissue, cell or molecule. Comparative questions need paired statements.',
      trap: 'Avoid purpose language such as “because it wants to”. Give a mechanism and a cause.'
    },
    mathematics: {
      intro: 'Identify the mathematical structure, choose a valid method and show a chain of exact working. A diagram or quick estimate should support, not replace, proof.',
      method: ['Write down the known information and target.', 'Select the theorem, identity, model or algorithm.', 'Work algebraically and keep exact values where possible.', 'Check domain, reasonableness, accuracy and required form.'],
      exam: 'Show enough working for method marks. State restrictions, units and the requested degree of accuracy.',
      trap: 'Do not round intermediate values or assume a diagram is drawn to scale.'
    },
    economics: {
      intro: 'Define the concept, build a causal chain and apply it to the stated economy, market or stakeholder. Evaluation must depend on conditions rather than opinion.',
      method: ['Define the key term.', 'Use a labelled diagram or calculation where relevant.', 'Develop cause, transmission mechanism and consequence.', 'Evaluate using time, magnitude, elasticity, priorities or unintended effects.'],
      exam: 'Every analytical paragraph should contain a clear “because” and “therefore”. Evaluation should explain when the judgement could change.',
      trap: 'A generic advantage or disadvantage earns little without application and a developed consequence.'
    },
    business: {
      intro: 'Apply each concept to the organisation in the case. Decisions depend on objectives, finance, scale, workforce, market conditions and stakeholder effects.',
      method: ['Identify the business objective or problem.', 'Apply a relevant concept or calculation to the case evidence.', 'Develop the effect on cost, revenue, people or competitiveness.', 'Reach a conditional recommendation.'],
      exam: 'Use the case data by name or number. A recommendation needs a supported reason and a limitation or condition.',
      trap: 'Do not list memorised advantages without showing how they affect this business.'
    },
    accounting: {
      intro: 'Classify the item, apply the double-entry or costing rule, and preserve the accounting equation. Clear workings and correct labels are essential.',
      method: ['Identify the account, statement or decision required.', 'Classify each item before recording it.', 'Apply the correct debit, credit, adjustment or costing rule.', 'Reconcile totals and interpret the result in context.'],
      exam: 'Use conventional statement headings, dates, labels and workings. For analysis, explain what a ratio change means rather than merely naming it.',
      trap: 'Do not confuse cash with profit, capital with revenue, or an expense with an asset.'
    },
    computing: {
      intro: 'Trace data from input through processing and storage to output. State how the mechanism works, then evaluate performance, security and user impact.',
      method: ['Identify inputs, processes, stored data and outputs.', 'Break the task into ordered steps.', 'Trace a representative value or record.', 'Test normal, boundary and invalid cases and state limitations.'],
      exam: 'Use exact technical terms. Algorithms must be unambiguous, finite and testable.',
      trap: 'Do not state that a technology is “faster” or “safer” without explaining the mechanism and comparison.'
    },
    humanities: {
      intro: 'Define the concept, use named evidence or theory, apply it to the issue, and evaluate the quality and limits of the explanation.',
      method: ['Define the key concept.', 'Present a theory, study or sociological explanation.', 'Use evidence and apply it to the question.', 'Evaluate method, evidence, alternative explanation and context.'],
      exam: 'Separate description, application and evaluation. Conclusions should weigh evidence rather than repeat earlier points.',
      trap: 'A named theory or study earns little unless its finding or reasoning is accurately used.'
    }
  },
  rules: [
    {
      terms: ['motion in a circle', 'circular motion'],
      summary: 'Uniform circular motion has constant speed but changing velocity. The acceleration and resultant force are directed towards the centre; they are not extra forces.',
      points: ['Use radians for angular relationships.', 'Write the inward resultant as the sum of real radial force components.', 'For just-contact or just-taut conditions, set the relevant normal force or tension to zero.'],
      formulas: ['ω = 2π/T = 2πf', 'v = rω', 'a = v²/r = rω²', 'ΣFᵢₙ = mv²/r'],
      trap: 'Velocity is tangential, while acceleration is radial and inward.',
      diagram: 'circular'
    },
    {
      terms: ['gravitational field'],
      summary: 'A mass creates an attractive field. Field strength is force per unit mass and is a vector; potential is work done per unit mass from infinity and is a scalar.',
      points: ['Use centre-to-centre distance, so r = R + h above a sphere.', 'Potential is negative when zero is chosen at infinity.', 'Add fields vectorially and potentials algebraically.'],
      formulas: ['F = Gm₁m₂/r²', 'g = GM/r²', 'φ = −GM/r', 'Eₚ = mφ', 'gᵣ = −dφ/dr'],
      trap: 'Field magnitude varies as 1/r²; potential varies as −1/r.',
      diagram: 'field'
    },
    {
      terms: ['temperature scales', 'thermal equilibrium', 'temperature'],
      summary: 'Thermal equilibrium means equal temperature and no net thermal transfer. Thermodynamic temperature is an absolute scale and must be used in proportional laws.',
      points: ['A temperature interval of 1 K equals an interval of 1 °C.', 'Absolute zero is 0 K; do not claim all microscopic energy vanishes.', 'Distinguish temperature from total internal energy.'],
      formulas: ['T/K = θ/°C + 273.15', 'Q = mcΔT', 'Q = mL'],
      trap: 'Use kelvin for temperature ratios and gas equations.',
      diagram: 'particles'
    },
    {
      terms: ['ideal gases', 'equation of state', 'kinetic theory of gases', 'the mole'],
      summary: 'The ideal-gas model links pressure, volume and absolute temperature to random molecular motion. Pressure comes from molecular momentum changes at the walls.',
      points: ['N is particle number; n is amount in moles.', 'The factor one-third comes from isotropic motion.', 'Equal temperatures mean equal mean translational kinetic energy, not equal molecular speed.'],
      formulas: ['pV = nRT = NkT', 'pV = ⅓Nm⟨c²⟩', '⟨Eₖ⟩ = 3kT/2', 'cᵣₘₛ = √(3RT/M)'],
      trap: 'Use molar mass in kg mol⁻¹ and volume in m³.',
      diagram: 'gas'
    },
    {
      terms: ['thermodynamics', 'internal energy', 'first law'],
      summary: 'Internal energy is microscopic random kinetic plus intermolecular potential energy. The first law accounts for transfers by heating and mechanical work.',
      points: ['State the sign convention before calculating.', 'Expansion means work is done by the gas and work done on it is negative.', 'Internal energy is a state function; heat and work depend on the path.'],
      formulas: ['ΔU = q + Wₒₙ = q − Wᵦᵧ', 'Wᵦᵧ = ∫p dV', 'constant pressure: Wᵦᵧ = pΔV'],
      trap: 'Do not mix work-on and work-by conventions in one calculation.',
      diagram: 'pv'
    },
    {
      terms: ['oscillations', 'simple harmonic'],
      summary: 'Simple harmonic motion requires acceleration proportional to displacement and opposite in direction. Displacement, velocity and acceleration have fixed phase relationships.',
      points: ['At equilibrium, speed is maximum and acceleration is zero.', 'At an extreme, speed is zero and acceleration magnitude is maximum.', 'Critical damping is the fastest non-oscillatory return; resonance gives maximum forced amplitude.'],
      formulas: ['a = −ω²x', 'v = ±ω√(x₀² − x²)', 'E = ½mω²x₀²', 'T = 2π/ω'],
      trap: 'Repeated motion is not automatically SHM.',
      diagram: 'wave'
    },
    {
      terms: ['electric fields', 'electric potential'],
      summary: 'Electric field strength is force per unit positive charge. Electric potential is energy per unit charge and may be positive or negative.',
      points: ['Field direction is the force direction on a positive test charge.', 'A negative charge accelerates opposite to the field direction.', 'Potential is scalar; field is vector.'],
      formulas: ['E = F/q', 'F = qE', 'E = ΔV/d (uniform field)', 'ΔEₚ = qΔV'],
      trap: 'Use the sign of charge when deciding force and energy direction.',
      diagram: 'field'
    },
    {
      terms: ['capacitance', 'capacitors'],
      summary: 'Capacitance is charge stored per unit potential difference. Energy is stored in the electric field, and an RC discharge is exponential.',
      points: ['Parallel capacitors share potential difference.', 'Series capacitors carry equal charge magnitude.', 'One time constant leaves 1/e of the initial charge, voltage or current.'],
      formulas: ['C = Q/V', 'W = ½QV = ½CV² = Q²/(2C)', 'τ = RC', 'Q = Q₀e⁻ᵗ/ᴿᶜ'],
      trap: 'Series and parallel capacitor rules are the reverse of the corresponding resistor rules.',
      diagram: 'capacitor'
    },
    {
      terms: ['magnetic fields', 'electromagnetic induction'],
      summary: 'Magnetic forces act on moving charges and current-carrying conductors. Induced e.m.f. opposes the change in magnetic flux linkage that produces it.',
      points: ['Force is perpendicular to both velocity/current and magnetic field.', 'Use the correct hand rule and state conventional-current direction.', 'An e.m.f. requires changing flux linkage, not merely a magnetic field.'],
      formulas: ['F = BIL sinθ', 'F = BQv sinθ', 'Φ = BA cosθ', 'ε = −d(NΦ)/dt'],
      trap: 'A stationary charge experiences no magnetic force.',
      diagram: 'magnetic'
    },
    {
      terms: ['alternating currents', 'rectification'],
      summary: 'Alternating quantities reverse direction periodically. Root-mean-square values give the equivalent heating effect of a direct current.',
      points: ['A diode permits current in one direction.', 'Full-wave rectification uses both half-cycles.', 'A smoothing capacitor reduces output ripple by charging and discharging.'],
      formulas: ['Vᵣₘₛ = V₀/√2', 'Iᵣₘₛ = I₀/√2', 'P̄ = VᵣₘₛIᵣₘₛ'],
      trap: 'Peak and rms values are not interchangeable.',
      diagram: 'rectifier'
    },
    {
      terms: ['quantum physics', 'photoelectric', 'wave–particle'],
      summary: 'Electromagnetic radiation transfers energy in photons. The photoelectric effect supports quantisation because one electron absorbs one photon.',
      points: ['Below threshold frequency, increasing intensity cannot cause emission.', 'Intensity changes photon arrival rate; frequency changes energy per photon.', 'Stopping potential measures maximum electron kinetic energy.'],
      formulas: ['E = hf = hc/λ', 'p = h/λ', 'hf = Φ + Eₖ,max', 'eVₛ = Eₖ,max'],
      trap: 'Intensity does not change photon energy at fixed frequency.',
      diagram: 'photoelectric'
    },
    {
      terms: ['nuclear physics', 'radioactive decay', 'particle physics'],
      summary: 'Nuclear processes conserve charge, nucleon number and total energy. Random decay of individual nuclei produces predictable exponential behaviour for a large sample.',
      points: ['Balance nuclear equations before calculating energy.', 'Half-life is independent of the initial number of unstable nuclei.', 'Binding energy comes from mass defect through mass–energy equivalence.'],
      formulas: ['E = Δmc²', 'N = N₀e⁻ˡᵃᵐᵇᵈᵃᵗ', 'A = λN', 't½ = ln2/λ'],
      trap: 'Activity and number of undecayed nuclei share the same fractional decay, but have different units.',
      diagram: 'decay'
    },
    {
      terms: ['medical physics', 'ultrasound', 'x-rays', 'pet scanning'],
      summary: 'Medical imaging balances image formation, contrast, resolution and patient risk. Each technique depends on a distinct interaction with tissue.',
      points: ['Ultrasound echoes arise at boundaries with different acoustic impedance.', 'X-ray attenuation depends on thickness and attenuation coefficient.', 'PET detects nearly opposite gamma photons following positron annihilation.'],
      formulas: ['Z = ρc', 'I = I₀e⁻ᵐᵘˣ', 'x = ct/2'],
      trap: 'The echo distance uses half the measured round-trip time.',
      diagram: 'imaging'
    },
    {
      terms: ['astronomy and cosmology', 'hubble', 'standard candles', 'stellar radii'],
      summary: 'Astronomical measurements combine luminosity, intensity, spectra and redshift to infer distance, size and cosmic expansion.',
      points: ['Intensity follows an inverse-square relationship.', 'A standard candle has known luminosity.', 'Hubble’s law supports an expanding universe and a finite expansion timescale.'],
      formulas: ['F = L/(4πd²)', 'L = 4πR²σT⁴', 'v = H₀d', 'z ≈ v/c for small z'],
      trap: 'Redshift is a fractional wavelength change, not a distance by itself.',
      diagram: 'stars'
    },
    {
      terms: ['kinematics', 'motion'],
      summary: 'Kinematics describes motion without explaining its cause. Distinguish distance from displacement and speed from velocity.',
      points: ['Gradient of displacement–time gives velocity.', 'Gradient of velocity–time gives acceleration.', 'Area under a velocity–time graph gives displacement.'],
      formulas: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 's = ½(u + v)t'],
      trap: 'Constant speed can still involve changing velocity.',
      diagram: 'motion-graph'
    },
    {
      terms: ['dynamics', 'momentum', 'newton'],
      summary: 'Dynamics links resultant force to acceleration and momentum change. In an isolated system, total momentum is conserved.',
      points: ['Draw a free-body diagram containing only forces acting on the chosen object.', 'Impulse equals change in momentum and the area under a force–time graph.', 'Momentum conservation requires a defined system with negligible external impulse.'],
      formulas: ['ΣF = ma = dp/dt', 'p = mv', 'impulse = FΔt = Δp'],
      trap: 'Action–reaction forces act on different bodies and cannot cancel on one free-body diagram.',
      diagram: 'force'
    },
    {
      terms: ['work, energy and power', 'energy conservation'],
      summary: 'Energy transfers between stores while total energy is conserved. Work is force through a displacement in the force direction.',
      points: ['Choose a system boundary before writing an energy equation.', 'Include dissipative transfers when mechanical energy is not conserved.', 'Power is the rate of energy transfer.'],
      formulas: ['W = Fs cosθ', 'Eₖ = ½mv²', 'ΔEₚ = mgΔh', 'P = W/t = Fv'],
      trap: 'Efficiency is useful output divided by total input, using like quantities.',
      diagram: 'energy'
    },
    {
      terms: ['deformation', 'stress and strain', 'elastic'],
      summary: 'Deformation depends on geometry and material behaviour. Stress and strain allow fair comparison between samples.',
      points: ['Hooke’s law applies only within the proportional region.', 'Elastic deformation is recoverable; plastic deformation is permanent.', 'The area under a force–extension graph is work done.'],
      formulas: ['stress = F/A', 'strain = ΔL/L', 'Young modulus = stress/strain', 'E = ½FΔL'],
      trap: 'Limit of proportionality and elastic limit are not necessarily identical.',
      diagram: 'stress'
    },
    {
      terms: ['waves', 'progressive waves', 'superposition', 'diffraction', 'interference'],
      summary: 'A wave transfers energy without net transfer of matter. Superposition adds instantaneous displacements and explains interference and stationary waves.',
      points: ['State whether oscillations are transverse or longitudinal.', 'Coherent sources maintain a constant phase difference.', 'Diffraction is strongest when aperture size is comparable with wavelength.'],
      formulas: ['v = fλ', 'I ∝ amplitude²', 'grating: d sinθ = nλ'],
      trap: 'Particles oscillate about equilibrium; they do not travel with the wave.',
      diagram: 'wave'
    },
    {
      terms: ['electricity', 'electric current', 'resistance and resistivity', 'd.c. circuits'],
      summary: 'Current is charge flow rate, potential difference is energy transferred per unit charge, and resistance links potential difference to current.',
      points: ['Apply junction and loop conservation laws with a declared sign convention.', 'An ideal voltmeter has very high resistance; an ideal ammeter has negligible resistance.', 'Resistivity is a material property; resistance also depends on dimensions.'],
      formulas: ['I = Q/t', 'V = W/Q', 'R = V/I', 'R = ρL/A', 'P = IV'],
      trap: 'Potential difference is not “used up”; energy is transferred per unit charge.',
      diagram: 'circuit'
    },
    {
      terms: ['cell structure', 'cells', 'organisation of the organism'],
      summary: 'Cells are the basic units of life. Their structures are specialised for transport, synthesis, energy transfer and control.',
      points: ['Compare plant, animal and prokaryotic cells using paired features.', 'Relate each organelle’s structure to its function.', 'Magnification is image size divided by actual size, using consistent units.'],
      formulas: ['magnification = image size / actual size'],
      trap: 'Magnification has no unit when both lengths use the same unit.',
      diagram: 'cell'
    },
    {
      terms: ['biological molecules', 'carbohydrates and lipids', 'proteins', 'water'],
      summary: 'Biological molecules have structures suited to energy storage, membranes, catalysis, transport and genetic information.',
      points: ['Know the correct food-test reagent, procedure and positive result.', 'Relate monomers, bonds and three-dimensional structure to function.', 'Water’s polarity explains its role as solvent and transport medium.'],
      formulas: [],
      trap: 'A positive food test needs both the final colour and the required heating condition where applicable.',
      diagram: 'molecules'
    },
    {
      terms: ['enzymes'],
      summary: 'Enzymes are biological catalysts whose active-site shape and chemical environment determine specificity and rate.',
      points: ['Increasing temperature raises collision rate until denaturation changes active-site shape.', 'Extreme pH disrupts bonds and active-site structure.', 'Control all variables except the independent variable in an investigation.'],
      formulas: ['rate = change in quantity / time'],
      trap: 'Low temperature slows enzyme action but does not usually denature the enzyme.',
      diagram: 'enzyme'
    },
    {
      terms: ['membranes and transport', 'movement into and out', 'diffusion', 'osmosis', 'active transport'],
      summary: 'Substances cross membranes by passive movement down gradients or active transport using energy and carrier proteins.',
      points: ['Diffusion is net particle movement down a concentration gradient.', 'Osmosis is net water movement through a partially permeable membrane down a water-potential gradient.', 'Active transport can move substances against a concentration gradient.'],
      formulas: [],
      trap: 'Osmosis refers only to water and requires a partially permeable membrane.',
      diagram: 'membrane'
    },
    {
      terms: ['mitotic cell cycle', 'mitosis', 'meiosis', 'nuclear division'],
      summary: 'DNA replication precedes nuclear division. Mitosis preserves chromosome number; meiosis halves it and creates genetic variation.',
      points: ['Use chromosome, chromatid and DNA terminology precisely.', 'Mitosis supports growth, repair and asexual reproduction.', 'Meiosis produces haploid gametes and variation through independent assortment and crossing over where required.'],
      formulas: [],
      trap: 'DNA replication occurs before division, not during chromosome separation.',
      diagram: 'chromosome'
    },
    {
      terms: ['nucleic acids', 'protein synthesis', 'inheritance', 'genes'],
      summary: 'The base sequence of DNA stores information. Transcription and translation convert that sequence into a polypeptide whose structure affects phenotype.',
      points: ['A gene is a length of DNA coding for a polypeptide or functional RNA.', 'Complementary base pairing preserves information.', 'Distinguish genotype, phenotype, allele, locus, homozygous and heterozygous.'],
      formulas: [],
      trap: 'One gene does not always equal one visible characteristic; environment and multiple genes can contribute.',
      diagram: 'dna'
    },
    {
      terms: ['transport in plants', 'transport in flowering plants', 'xylem', 'phloem', 'transpiration', 'translocation'],
      summary: 'Xylem carries water and mineral ions and provides support; phloem translocates assimilates between sources and sinks.',
      points: ['Transpiration is driven by evaporation and diffusion from leaves.', 'Cohesion maintains a continuous water column in xylem.', 'Environmental factors alter the water-vapour gradient and stomatal behaviour.'],
      formulas: [],
      trap: 'Transpiration and translocation are different processes in different tissues.',
      diagram: 'plant-transport'
    },
    {
      terms: ['transport in mammals', 'transport in humans', 'heart', 'circulatory'],
      summary: 'The circulatory system maintains mass flow between exchange surfaces and cells. Vessel and heart structures match their pressure and transport roles.',
      points: ['Trace blood through chambers, valves, lungs and body in the correct order.', 'Arteries carry blood away from the heart; veins carry it towards the heart.', 'Capillaries have short diffusion distances and a large total area.'],
      formulas: ['cardiac output = heart rate × stroke volume'],
      trap: 'Artery and vein names depend on direction of flow, not oxygen concentration.',
      diagram: 'circulation'
    },
    {
      terms: ['gas exchange'],
      summary: 'Efficient gas-exchange surfaces combine large area, short diffusion distance, ventilation and a maintained concentration gradient.',
      points: ['Ventilation renews the external medium.', 'Blood flow or transport maintains internal gradients.', 'Explain changes during exercise through increased respiration demand.'],
      formulas: [],
      trap: 'Ventilation is bulk movement of air; gas exchange is diffusion.',
      diagram: 'alveolus'
    },
    {
      terms: ['respiration'],
      summary: 'Respiration transfers chemical energy from organic molecules to ATP. Aerobic pathways yield more ATP than anaerobic pathways.',
      points: ['Do not confuse respiration with breathing.', 'State the correct reactants, products and cellular locations.', 'Explain oxygen debt through lactate processing and restoration of normal conditions.'],
      formulas: [],
      trap: 'Energy is released in controlled reactions; it is not “made” by respiration.',
      diagram: 'flow'
    },
    {
      terms: ['photosynthesis', 'plant nutrition'],
      summary: 'Photosynthesis transfers light energy into chemical energy. Rate depends on whichever required factor is most limiting.',
      points: ['Separate light-dependent events from carbon fixation where the level requires it.', 'Relate leaf and chloroplast structures to absorption, diffusion and transport.', 'A limiting-factor conclusion must name what is fixed and what is limiting.'],
      formulas: ['carbon dioxide + water → glucose + oxygen'],
      trap: 'A factor can stop being limiting when another factor becomes more restrictive.',
      diagram: 'photosynthesis'
    },
    {
      terms: ['homeostasis', 'coordination and control', 'control and coordination'],
      summary: 'Homeostasis uses receptors, coordination centres and effectors in negative-feedback loops to keep internal conditions within limits.',
      points: ['State the stimulus, receptor, coordination centre, effector and response.', 'Negative feedback opposes the original deviation.', 'Nervous responses are rapid and targeted; endocrine responses are chemical and often longer lasting.'],
      formulas: [],
      trap: 'Negative feedback reduces a deviation; it does not mean the response is harmful.',
      diagram: 'feedback'
    },
    {
      terms: ['immunity', 'infectious disease', 'diseases'],
      summary: 'Pathogens cause transmissible disease, while physical barriers, phagocytes and specific lymphocyte responses provide defence.',
      points: ['Antigens trigger production of specific antibodies and memory cells.', 'Vaccination produces active immunity without the full disease.', 'Antibiotics target bacteria and do not treat viral infections.'],
      formulas: [],
      trap: 'Passive immunity gives immediate short-term protection but does not create memory cells.',
      diagram: 'immune'
    },
    {
      terms: ['selection and evolution', 'variation and selection', 'evolution'],
      summary: 'Heritable variation combined with selection changes allele frequencies over generations. Populations evolve; individuals do not.',
      points: ['State the selection pressure and pre-existing variation.', 'Link advantageous phenotype to survival and reproductive success.', 'Explain inheritance and increasing allele frequency over generations.'],
      formulas: [],
      trap: 'Mutations are not produced because an organism needs them.',
      diagram: 'selection'
    },
    {
      terms: ['ecology', 'organisms and their environment', 'relationships of organisms', 'ecosystems'],
      summary: 'Ecosystems transfer energy and recycle matter through interactions among organisms and the physical environment.',
      points: ['Arrows in food chains show energy-transfer direction.', 'Energy is lost between trophic levels through respiration, waste and uneaten material.', 'Sampling methods must match organism distribution and reduce bias.'],
      formulas: ['efficiency = useful transfer / total input × 100%'],
      trap: 'Energy flows through an ecosystem; nutrients are recycled.',
      diagram: 'food-web'
    },
    {
      terms: ['genetic technology', 'biotechnology'],
      summary: 'Biotechnology uses organisms, enzymes or genetic information to produce useful products. Genetic engineering changes DNA deliberately.',
      points: ['Name restriction enzymes, ligase, vectors and host cells where required.', 'Select transformed cells before culturing them.', 'Evaluate benefits alongside ecological, ethical and economic risks.'],
      formulas: [],
      trap: 'Selective breeding changes allele frequencies over generations; genetic engineering directly changes DNA.',
      diagram: 'genetic-flow'
    },
    {
      terms: ['atomic structure', 'atoms, elements and compounds', 'isotopes'],
      summary: 'Atomic behaviour follows from proton number, electron arrangement and nuclear composition. Isotopes share proton number but differ in neutron number.',
      points: ['Use proton number to identify an element.', 'Form ions by electron transfer, not by changing the nucleus.', 'Relative atomic mass is a weighted mean of isotopic masses.'],
      formulas: ['Aᵣ = Σ(isotopic mass × abundance) / Σabundance'],
      trap: 'Isotopes of one element have the same chemical behaviour because they have the same electron arrangement.',
      diagram: 'atom'
    },
    {
      terms: ['stoichiometry', 'the mole', 'reacting masses'],
      summary: 'Stoichiometry converts measured quantities to moles, applies a balanced-equation ratio, and converts to the requested quantity.',
      points: ['Balance the equation before using any ratio.', 'Identify the limiting reagent when more than one reactant amount is supplied.', 'Use actual over theoretical amount for percentage yield.'],
      formulas: ['n = m/M', 'n = cV', 'pV = nRT', '% yield = actual/theoretical × 100'],
      trap: 'Volume in n = cV must be in dm³ when concentration is mol dm⁻³.',
      diagram: 'stoich'
    },
    {
      terms: ['chemical bonding', 'ionic bonding', 'covalent bonding', 'metallic bonding'],
      summary: 'Structure and bonding determine physical properties. Explain properties through particles, forces, charge carriers and energy needed to separate particles.',
      points: ['Ionic lattices contain oppositely charged ions.', 'Simple molecules have strong covalent bonds internally but weaker intermolecular forces.', 'Metals contain positive ions attracted to delocalised electrons.'],
      formulas: [],
      trap: 'Melting a simple molecular substance does not break its covalent bonds.',
      diagram: 'bonding'
    },
    {
      terms: ['states of matter', 'gaseous state'],
      summary: 'Particle spacing, arrangement, motion and attraction explain state changes, diffusion and gas behaviour.',
      points: ['Temperature relates to average kinetic energy.', 'A phase change changes potential energy while temperature remains constant.', 'Diffusion results from random particle motion and a concentration gradient.'],
      formulas: ['pV = nRT'],
      trap: 'Particles do not expand when a substance is heated; their spacing and motion change.',
      diagram: 'particles'
    },
    {
      terms: ['chemical energetics', 'enthalpy', 'gibbs', 'entropy'],
      summary: 'Energetics compares energy needed to break interactions with energy released when new interactions form.',
      points: ['Exothermic changes have negative system enthalpy change.', 'Hess cycles must use equation direction and stoichiometric multiples consistently.', 'Feasibility depends on enthalpy, entropy and temperature at A Level.'],
      formulas: ['ΔH = ΣH(products) − ΣH(reactants)', 'ΔG = ΔH − TΔS'],
      trap: 'Activation energy affects rate, not the overall enthalpy change.',
      diagram: 'energy-profile'
    },
    {
      terms: ['electrochemistry', 'electrolysis', 'electrode potentials'],
      summary: 'Electrochemistry tracks electron transfer. Oxidation occurs at the anode and reduction at the cathode in every cell.',
      points: ['Write ionic half-equations and balance charge.', 'Use electrode material, ion concentration and discharge rules to predict products.', 'Standard cell potential combines reduction potentials with correct electrode roles.'],
      formulas: ['E°cell = E°cathode − E°anode', 'Q = It', 'moles of e⁻ = Q/F'],
      trap: 'Anode and cathode signs change between electrolytic and voltaic cells; oxidation and reduction do not.',
      diagram: 'electrolysis'
    },
    {
      terms: ['equilibria', 'equilibrium', 'acids and bases'],
      summary: 'Dynamic equilibrium has equal forward and reverse rates in a closed system. A changed condition shifts composition while the equilibrium constant changes only with temperature.',
      points: ['Use Le Chatelier’s principle to predict direction, then explain the rate response.', 'A catalyst speeds both directions and does not change equilibrium position.', 'Acid–base calculations require the correct equilibrium expression and approximation.'],
      formulas: ['Kc = product concentrations / reactant concentrations', 'pH = −log₁₀[H⁺]', 'Kᵥ = [H⁺][OH⁻]'],
      trap: 'Equal rates do not mean equal concentrations.',
      diagram: 'equilibrium'
    },
    {
      terms: ['reaction kinetics', 'rate of reaction'],
      summary: 'Reaction rate depends on collision frequency and the fraction of collisions with enough energy and suitable orientation.',
      points: ['A catalyst provides a lower-activation-energy pathway.', 'Temperature strongly increases the fraction above activation energy.', 'Initial-rate data can determine reaction orders at A Level.'],
      formulas: ['rate = k[A]ᵐ[B]ⁿ', 'rate = change in amount / time'],
      trap: 'A catalyst does not lower the energy of reactants or products.',
      diagram: 'energy-profile'
    },
    {
      terms: ['organic chemistry', 'hydrocarbons', 'halogen compounds', 'hydroxy compounds', 'carbonyl compounds', 'carboxylic acids', 'nitrogen compounds', 'polymerisation', 'organic synthesis'],
      summary: 'Organic chemistry is organised by functional group, reaction type, reagent, conditions and observable product.',
      points: ['Distinguish structural, displayed and skeletal formulas.', 'For every conversion, learn reagent, conditions, reaction type and product.', 'Use mechanisms only where the syllabus requires them and show electron-pair movement accurately.'],
      formulas: [],
      trap: 'A correct product without required reagent or conditions is incomplete.',
      diagram: 'organic-route'
    },
    {
      terms: ['analytical techniques', 'chromatography', 'spectroscopy', 'identification of ions'],
      summary: 'Analytical methods separate, identify or quantify substances by comparing measured behaviour with standards.',
      points: ['A pure substance gives the expected single melting/boiling behaviour under stated conditions.', 'Chromatography depends on relative attraction to stationary and mobile phases.', 'Combine independent spectral evidence before proposing a structure.'],
      formulas: ['Rᶠ = distance moved by solute / distance moved by solvent front'],
      trap: 'The solvent front must be marked before the solvent evaporates.',
      diagram: 'chromatography'
    },
    {
      terms: ['number'],
      summary: 'Number work requires exact arithmetic, proportional reasoning and controlled approximation.',
      points: ['Use prime factors for HCF and LCM.', 'Treat bounds with the operation that gives the true extreme.', 'Keep exact fractions or surds until a decimal is requested.'],
      formulas: [],
      trap: 'A rounded value represents an interval, not one exact original number.'
    },
    {
      terms: ['algebra', 'functions', 'sequences'],
      summary: 'Algebra preserves equality while expressions are transformed. Functions map allowed inputs to outputs and may have restricted domains.',
      points: ['Factor fully before cancelling algebraic factors.', 'Check solutions in the original equation, especially after squaring.', 'For inverse functions, interchange input and output and then rearrange.'],
      formulas: [],
      trap: 'Terms can be cancelled only when they are factors of the entire numerator and denominator.'
    },
    {
      terms: ['coordinate geometry', 'linear graphs'],
      summary: 'Coordinate geometry translates geometric relationships into gradients, distances and equations.',
      points: ['Parallel lines have equal gradients.', 'Non-vertical perpendicular gradients multiply to −1.', 'Use a known point with the gradient to form the equation.'],
      formulas: ['m = (y₂ − y₁)/(x₂ − x₁)', 'y − y₁ = m(x − x₁)', 'distance = √((Δx)² + (Δy)²)'],
      trap: 'A vertical line has undefined gradient, not zero.',
      diagram: 'graph'
    },
    {
      terms: ['geometry', 'circle theorems', 'similarity'],
      summary: 'Geometric conclusions must follow from stated theorems, congruence, similarity or angle facts.',
      points: ['Mark equal angles and lengths before calculating.', 'Give the theorem as the reason in proof questions.', 'Areas scale with length factor squared; volumes with length factor cubed.'],
      formulas: [],
      trap: 'Never infer a property merely because the diagram appears to show it.',
      diagram: 'geometry'
    },
    {
      terms: ['mensuration', 'surface area', 'volume'],
      summary: 'Mensuration combines a labelled geometric model with consistent units and exact formulas.',
      points: ['Split compound shapes into non-overlapping standard parts.', 'Convert units before substituting.', 'For partial solids or sectors, use the appropriate fraction of a full shape.'],
      formulas: ['circle area = πr²', 'circumference = 2πr', 'prism volume = cross-sectional area × length'],
      trap: 'Area and volume conversion factors must be squared and cubed respectively.',
      diagram: 'geometry'
    },
    {
      terms: ['trigonometry'],
      summary: 'Choose the trigonometric relationship from the triangle information and check whether angles are in degrees or radians.',
      points: ['Use sine and cosine rules for non-right-angled triangles.', 'Check the ambiguous sine-rule case.', 'Bearings are measured clockwise from north using three figures.'],
      formulas: ['a/sinA = b/sinB = c/sinC', 'a² = b² + c² − 2bc cosA', 'area = ½ab sinC'],
      trap: 'Pair each side with its opposite angle.',
      diagram: 'triangle'
    },
    {
      terms: ['probability'],
      summary: 'Probability models a defined sample space. Addition handles alternatives; multiplication handles sequential intersections with correct conditions.',
      points: ['Use complements for “at least one”.', 'Without replacement changes later probabilities.', 'Independence and mutual exclusivity are different ideas.'],
      formulas: ['P(A′) = 1 − P(A)', 'P(A ∪ B) = P(A)+P(B)−P(A ∩ B)'],
      trap: 'Mutually exclusive events cannot be independent unless one has probability zero.',
      diagram: 'tree'
    },
    {
      terms: ['statistics', 'representation of data', 'normal distribution', 'hypothesis tests', 'sampling'],
      summary: 'Statistics summarises variation and uses samples to make evidence-based statements about populations.',
      points: ['Choose a measure of centre and spread appropriate to skew and outliers.', 'Histogram area represents frequency.', 'A hypothesis-test conclusion must be written in context at the stated significance level.'],
      formulas: ['frequency density = frequency/class width', 'z = (x − μ)/σ'],
      trap: 'Correlation does not establish causation.',
      diagram: 'distribution'
    },
    {
      terms: ['differentiation', 'integration', 'differential equations'],
      summary: 'Differentiation measures instantaneous rate of change; integration accumulates quantities and reverses differentiation up to a constant.',
      points: ['Differentiate before substituting a coordinate for a gradient.', 'Use boundary conditions to find constants.', 'A definite integral may represent signed area, so inspect the graph.'],
      formulas: ['d(xⁿ)/dx = nxⁿ⁻¹', '∫xⁿdx = xⁿ⁺¹/(n+1)+C'],
      trap: 'A stationary point has zero first derivative but is not automatically a maximum or minimum.',
      diagram: 'graph'
    },
    {
      terms: ['basic economic', 'economic problem', 'resource allocation'],
      summary: 'Scarcity forces choices because finite resources cannot satisfy unlimited wants. Every choice has an opportunity cost.',
      points: ['Opportunity cost is the next best alternative forgone.', 'A production possibility curve shows maximum attainable combinations.', 'Growth shifts productive capacity; unemployment places production inside the boundary.'],
      formulas: [],
      trap: 'Opportunity cost is not every alternative forgone.',
      diagram: 'ppc'
    },
    {
      terms: ['allocation of resources', 'price system', 'demand', 'supply', 'elasticity'],
      summary: 'Prices coordinate consumers and producers through demand, supply and incentives. Elasticity measures responsiveness, not simply the direction of change.',
      points: ['A price change causes movement along a curve; another determinant shifts the curve.', 'A shortage puts upward pressure on price; a surplus puts downward pressure on price.', 'Use elasticity to develop revenue and policy effects.'],
      formulas: ['PED = %ΔQd/%ΔP', 'PES = %ΔQs/%ΔP'],
      trap: 'Do not shift demand when the good’s own price changes.',
      diagram: 'supply-demand'
    },
    {
      terms: ['microeconomic decision', 'firms', 'market failure'],
      summary: 'Households, workers, firms and governments respond to incentives but may create outcomes that are not socially efficient.',
      points: ['Distinguish private from external costs and benefits.', 'Develop how a policy changes incentives and quantities.', 'Evaluate using information failure, enforcement cost and unintended effects.'],
      formulas: ['profit = total revenue − total cost', 'average cost = total cost/output'],
      trap: 'Government intervention can reduce market failure without eliminating every inefficiency.',
      diagram: 'supply-demand'
    },
    {
      terms: ['macroeconomy', 'fiscal policy', 'monetary policy', 'economic growth', 'inflation', 'unemployment'],
      summary: 'Macroeconomic performance involves growth, employment, price stability and external balance, with possible conflicts between objectives.',
      points: ['Trace policy through spending, borrowing, interest rates, exchange rates or productive capacity.', 'Separate demand-side from supply-side effects.', 'Evaluate by time lags, confidence, initial conditions and distributional effects.'],
      formulas: ['real GDP per head = real GDP/population'],
      trap: 'Economic growth does not guarantee higher living standards for every group.',
      diagram: 'macro'
    },
    {
      terms: ['international trade', 'globalisation', 'foreign exchange'],
      summary: 'Trade enables specialisation but distributes gains and adjustment costs unevenly. Exchange-rate changes alter relative prices and competitiveness.',
      points: ['Comparative advantage depends on lower opportunity cost.', 'A depreciation makes exports cheaper and imports dearer, other things equal.', 'Evaluate protection through consumers, producers, government and retaliation.'],
      formulas: [],
      trap: 'An exchange-rate effect depends on elasticities and how firms pass costs into prices.',
      diagram: 'trade'
    },
    {
      terms: ['understanding business activity', 'business and its environment', 'enterprise', 'business structure'],
      summary: 'Businesses combine resources to meet needs and objectives. Ownership, scale and stakeholder priorities shape decisions and risk.',
      points: ['Distinguish objectives from strategies.', 'Choose ownership using control, liability, finance and continuity.', 'Stakeholder objectives can conflict and their influence varies by context.'],
      formulas: [],
      trap: 'Growth is not automatically success if profitability, liquidity or control deteriorates.',
      diagram: 'stakeholders'
    },
    {
      terms: ['people in business', 'human resource', 'motivation', 'leadership'],
      summary: 'Workforce decisions affect capacity, quality, cost, motivation and organisational culture.',
      points: ['Apply recruitment and training choices to the required skills.', 'Distinguish financial and non-financial motivators.', 'Leadership effectiveness depends on task, workforce and situation.'],
      formulas: ['labour turnover = leavers/average workforce × 100'],
      trap: 'A motivation theory is not a guaranteed prediction for every worker.',
      diagram: 'organisation'
    },
    {
      terms: ['marketing'],
      summary: 'Marketing identifies and satisfies customer needs profitably through research, segmentation and a coherent marketing mix.',
      points: ['Research quality depends on sample, question design and source.', 'The elements of the marketing mix must support one another.', 'A strategy should match target market, objectives and available finance.'],
      formulas: ['market share = business sales/market sales × 100'],
      trap: 'Promotion communicates value; it does not by itself guarantee demand.',
      diagram: 'marketing'
    },
    {
      terms: ['operations management', 'inventory', 'capacity', 'quality management'],
      summary: 'Operations transforms inputs into outputs while managing capacity, inventory, quality, cost and sustainability.',
      points: ['Select job, batch, flow or mass customisation from volume and variety.', 'Just-in-time reduces holding cost but raises disruption risk.', 'Quality assurance prevents defects through the process; quality control checks output.'],
      formulas: ['capacity utilisation = actual output/maximum output × 100', 'productivity = output/input'],
      trap: 'The cheapest process is not necessarily the most suitable for quality, flexibility or demand.',
      diagram: 'process'
    },
    {
      terms: ['finance and accounting', 'financial information', 'cash flow', 'costs', 'investment appraisal'],
      summary: 'Financial decisions balance profitability, liquidity, risk and long-term objectives. Cash timing is different from profit recognition.',
      points: ['Select finance by amount, duration, cost, risk and control.', 'Contribution first covers fixed costs and then creates profit.', 'Use calculations as evidence, then discuss qualitative factors.'],
      formulas: ['profit = revenue − total cost', 'contribution = selling price − variable cost', 'break-even output = fixed cost/contribution per unit'],
      trap: 'A profitable business can still fail from insufficient cash.',
      diagram: 'break-even'
    },
    {
      terms: ['accounting system', 'double entry', 'sources and recording'],
      summary: 'Double entry records equal debit and credit effects and preserves the accounting equation.',
      points: ['Classify each transaction before recording it.', 'Use source documents and books of prime entry in the correct sequence.', 'Balance ledger accounts with clear dates and narratives.'],
      formulas: ['assets = capital + liabilities'],
      trap: 'Debit does not always mean increase; the effect depends on the account class.',
      diagram: 'accounting-flow'
    },
    {
      terms: ['financial statements', 'preparation of financial'],
      summary: 'Financial statements measure performance and position after accruals, prepayments, depreciation and other required adjustments.',
      points: ['Match income and expenses to the accounting period.', 'Distinguish statement of profit or loss from statement of financial position.', 'Show workings for adjusted figures and retained earnings.'],
      formulas: ['gross profit = revenue − cost of sales', 'profit for year = gross profit + other income − expenses'],
      trap: 'Closing inventory affects both cost of sales and current assets.',
      diagram: 'statements'
    },
    {
      terms: ['analysis and interpretation', 'ratios'],
      summary: 'Ratios convert accounting figures into indicators of profitability, liquidity and efficiency, but require comparison and context.',
      points: ['State the direction and size of change.', 'Explain the likely operational reason and business consequence.', 'Use more than one ratio and recognise limitations of historical data.'],
      formulas: ['gross margin = gross profit/revenue × 100', 'current ratio = current assets/current liabilities', 'ROCE = operating profit/capital employed × 100'],
      trap: 'A ratio alone is not a conclusion; benchmarks and business context matter.',
      diagram: 'ratio'
    },
    {
      terms: ['data representation', 'information representation', 'number systems'],
      summary: 'Computers encode numbers, text, images and sound as binary patterns interpreted according to an agreed representation.',
      points: ['Show place values when converting number bases.', 'Resolution, sample rate and bit depth affect quality and file size.', 'Lossless compression preserves all source data; lossy compression discards selected detail.'],
      formulas: ['image size = width × height × colour depth', 'sound size = sample rate × bit depth × channels × time'],
      trap: 'A bit pattern has no meaning until its representation is known.',
      diagram: 'binary'
    },
    {
      terms: ['network', 'communication', 'data transmission'],
      summary: 'Networks divide communication into protocols and layers so devices can address, route, check and reconstruct data.',
      points: ['Packet switching sends independently routed packets containing control information.', 'Protocols define agreed formats and behaviour.', 'Compare network choices using range, bandwidth, latency, reliability, cost and security.'],
      formulas: ['transmission time = data size/data rate'],
      trap: 'The internet is infrastructure; the World Wide Web is a service using it.',
      diagram: 'network'
    },
    {
      terms: ['hardware', 'processor', 'cpu architecture'],
      summary: 'A processor repeatedly fetches, decodes and executes instructions while registers, buses, memory and control signals coordinate data movement.',
      points: ['Trace the program counter, memory address register, memory data register and current instruction register.', 'Clock rate alone does not determine performance.', 'Cache reduces average memory-access time by holding likely-needed data and instructions.'],
      formulas: [],
      trap: 'Storage and main memory have different roles and persistence.',
      diagram: 'cpu'
    },
    {
      terms: ['software', 'operating system', 'language translators'],
      summary: 'System software manages hardware and provides services; translators convert source code into executable or intermediate forms.',
      points: ['An operating system manages processes, memory, files, devices and security.', 'Compilers translate whole programs; interpreters execute progressively.', 'An IDE combines editing, translation, debugging and testing tools.'],
      formulas: [],
      trap: 'Utility software performs maintenance tasks; it is not the operating system itself.',
      diagram: 'layers'
    },
    {
      terms: ['security', 'esecurity', 'data integrity', 'encryption'],
      summary: 'Security protects confidentiality, integrity and availability through layered technical and organisational controls.',
      points: ['Identify the asset, threat, vulnerability and control.', 'Encryption protects readable content but does not prove data is harmless.', 'Authentication verifies identity; authorisation controls permitted actions.'],
      formulas: [],
      trap: 'A backup supports recovery but does not prevent an attack.',
      diagram: 'security'
    },
    {
      terms: ['database', 'sql', 'normalisation'],
      summary: 'A database stores structured related data with constraints that support consistency, querying and controlled updates.',
      points: ['Choose primary and foreign keys deliberately.', 'Normalisation reduces duplicated data and update anomalies.', 'Test queries against representative records and boundary conditions.'],
      formulas: [],
      trap: 'A field name, record and table are different levels of structure.',
      diagram: 'database'
    },
    {
      terms: ['algorithm', 'flowchart', 'computational thinking', 'problem-solving'],
      summary: 'An algorithm is a finite, unambiguous sequence that transforms defined inputs into required outputs.',
      points: ['Decompose the problem and identify variables and invariants.', 'Use selection and iteration with explicit conditions.', 'Dry-run normal, boundary and invalid data.'],
      formulas: [],
      trap: 'A flowchart should clarify control flow, not decorate a simple statement.',
      diagram: 'algorithm'
    },
    {
      terms: ['programming', 'data types and structures', 'further programming'],
      summary: 'Programs combine suitable data structures with modular control logic and validation to solve a specified problem.',
      points: ['Choose a data type that represents the domain correctly.', 'Keep functions focused and define parameters, return values and side effects.', 'Testing should include normal, boundary, invalid and extreme cases.'],
      formulas: [],
      trap: 'Validation checks acceptability; verification checks that entered data matches the source.',
      diagram: 'code-flow'
    },
    {
      terms: ['system life cycle', 'software development', 'project management'],
      summary: 'Development moves from requirements through design, implementation, testing, deployment and evaluation, with iteration when evidence demands change.',
      points: ['Requirements must be specific and testable.', 'Choose direct, parallel, pilot or phased changeover from risk and context.', 'Evaluation compares the finished system with original requirements.'],
      formulas: [],
      trap: 'Testing finds defects; evaluation decides whether the system meets user needs.',
      diagram: 'lifecycle'
    },
    {
      terms: ['artificial intelligence', 'expert systems', 'automated systems', 'robotics'],
      summary: 'Automated and intelligent systems sense inputs, apply rules or learned models, and produce actions or recommendations.',
      points: ['Separate sensors, processing, actuators and feedback.', 'An expert system uses a knowledge base, inference engine and user interface.', 'Evaluate bias, explainability, safety, employment and accountability.'],
      formulas: [],
      trap: 'Automation follows programmed or learned logic; it does not imply human-like understanding.',
      diagram: 'feedback'
    },
    {
      terms: ['research methods', 'research methodology', 'sociologists conduct research'],
      summary: 'Research design must align the question, operational definitions, sample, method, controls and analysis while protecting participants.',
      points: ['Reliability concerns consistency; validity concerns whether the intended construct is measured.', 'Sampling affects representativeness and generalisation.', 'Evaluate ethical, practical and methodological issues separately.'],
      formulas: [],
      trap: 'A large biased sample is still biased.',
      diagram: 'research'
    },
    {
      terms: ['identity', 'socialisation'],
      summary: 'Social identity develops through interaction with institutions, groups and culture, while individuals can interpret and resist expectations.',
      points: ['Distinguish primary and secondary socialisation.', 'Use norms, values, roles, sanctions and status precisely.', 'Compare structural and interactionist explanations.'],
      formulas: [],
      trap: 'Socialisation influences behaviour without making every individual identical.',
      diagram: 'socialisation'
    },
    {
      terms: ['stratification', 'inequality'],
      summary: 'Stratification distributes wealth, power, status and life chances unevenly across social groups.',
      points: ['Separate evidence of inequality from explanations for it.', 'Compare class, gender, ethnicity and age where relevant.', 'Evaluate whether policy changes outcomes or only formal rules.'],
      formulas: [],
      trap: 'Correlation between group membership and outcome does not by itself identify the mechanism.',
      diagram: 'stratification'
    },
    {
      terms: ['family'],
      summary: 'Families perform roles that vary by culture, social group and historical period. Perspectives disagree over whose interests family arrangements serve.',
      points: ['Define family diversity rather than assuming one universal form.', 'Compare functionalist, Marxist, feminist and interactionist views where required.', 'Use evidence to assess changes in roles, power and relationships.'],
      formulas: [],
      trap: 'A changing family pattern does not automatically mean family decline.',
      diagram: 'family'
    },
    {
      terms: ['education'],
      summary: 'Education transmits knowledge and norms while allocating opportunities, but experiences and outcomes vary by social group.',
      points: ['Separate in-school and out-of-school factors.', 'Use concepts such as labelling, hidden curriculum and cultural capital accurately.', 'Evaluate official statistics alongside qualitative evidence.'],
      formulas: [],
      trap: 'Do not treat achievement differences as proof of innate ability.',
      diagram: 'education'
    },
    {
      terms: ['crime', 'deviance', 'social control'],
      summary: 'Crime breaks formal law; deviance breaks social norms. Definitions, enforcement and recorded patterns vary across groups and societies.',
      points: ['Distinguish official crime data from actual offending.', 'Compare structural, interactionist and control explanations.', 'Evaluate policing, reporting, labelling and sampling effects.'],
      formulas: [],
      trap: 'Official statistics measure recorded crime, not every offence committed.',
      diagram: 'justice'
    },
    {
      terms: ['memory and forgetting', 'memory'],
      summary: 'Memory models explain encoding, storage and retrieval, while forgetting can result from processing, interference, motivation or biological factors.',
      points: ['Compare model assumptions and supporting evidence.', 'Operationalise memory performance precisely.', 'Evaluate ecological validity and individual differences.'],
      formulas: [],
      trap: 'A study result supports an explanation; it rarely proves it uniquely.',
      diagram: 'memory'
    },
    {
      terms: ['sleep and dreams'],
      summary: 'Sleep research connects physiological measures, sleep stages and reports of dream experience while theories explain function and content differently.',
      points: ['Distinguish objective physiological measures from subjective self-report.', 'Link evidence directly to restoration, activation-synthesis or psychodynamic claims.', 'Evaluate samples, demand characteristics and measurement validity.'],
      formulas: [],
      trap: 'A correlation between a sleep measure and report does not establish a complete causal theory.',
      diagram: 'sleep'
    },
    {
      terms: ['prosocial', 'obedience', 'social approach'],
      summary: 'Social behaviour is shaped by group membership, models, situational pressures and perceived responsibility.',
      points: ['State the social mechanism before applying it.', 'Use study procedures and findings accurately.', 'Evaluate ethics, culture, realism and alternative explanations.'],
      formulas: [],
      trap: 'Do not generalise from a narrow sample without qualification.',
      diagram: 'social'
    },
    {
      terms: ['visual perception', 'cognitive approach'],
      summary: 'Perception combines sensory information with processing shaped by context, expectation and experience.',
      points: ['Compare direct and constructivist explanations.', 'Use illusions as evidence while recognising their limits.', 'Separate the stimulus from the observer’s interpretation.'],
      formulas: [],
      trap: 'An illusion demonstrates a mismatch, not that perception is always inaccurate.',
      diagram: 'perception'
    },
    {
      terms: ['motivation', 'learning approach'],
      summary: 'Motivation and learning explanations connect internal states, reinforcement, conditioning, cognition and social models to behaviour.',
      points: ['Define the predicted mechanism.', 'Distinguish positive reinforcement from punishment.', 'Evaluate reductionism, determinism and real-world application.'],
      formulas: [],
      trap: 'Positive reinforcement means adding a desirable consequence, not simply “good behaviour”.',
      diagram: 'learning'
    },
    {
      terms: ['clinical psychology'],
      summary: 'Clinical psychology compares diagnostic criteria, explanations and treatments while recognising individual and cultural variation.',
      points: ['Separate description of symptoms from explanation of causes.', 'Compare biological, cognitive and behavioural evidence.', 'Evaluate effectiveness, ethics, side effects, relapse and appropriateness.'],
      formulas: [],
      trap: 'Reliability of diagnosis and validity of diagnosis are different questions.',
      diagram: 'clinical'
    },
    {
      terms: ['consumer psychology'],
      summary: 'Consumer psychology examines how environments, information, heuristics, products and advertising influence decisions.',
      points: ['Apply evidence to a specific consumer setting.', 'Distinguish an observed association from a causal effect.', 'Evaluate realism, commercial interests and cultural generalisation.'],
      formulas: [],
      trap: 'A statistically detectable effect may still have limited practical importance.',
      diagram: 'consumer'
    },
    {
      terms: ['health psychology'],
      summary: 'Health psychology studies how cognition, behaviour, relationships and environment influence health choices, pain, stress and adherence.',
      points: ['Use biopsychosocial explanations rather than a single cause.', 'Compare objective measures with self-report.', 'Evaluate feasibility and long-term adherence as well as immediate effect.'],
      formulas: [],
      trap: 'An effective intervention in a study may not generalise to routine practice.',
      diagram: 'health'
    },
    {
      terms: ['organisational psychology'],
      summary: 'Organisational psychology applies evidence about motivation, leadership, groups, conditions and satisfaction to workplace outcomes.',
      points: ['Apply theory to the organisation and task.', 'Distinguish individual performance from group and system effects.', 'Evaluate productivity alongside wellbeing, ethics and measurement quality.'],
      formulas: [],
      trap: 'A leadership style is not universally best; effectiveness depends on context.',
      diagram: 'organisation'
    },
    {
      terms: ['transformations and vectors'],
      summary: 'Transformations change position, orientation or size, while vectors describe directed displacement and support geometric proofs.',
      points: ['Give the complete transformation, including centre, angle, line or scale factor where required.', 'Use column vectors consistently for translations and vector arithmetic.', 'In vector geometry, express points using a common pair of independent vectors.'],
      formulas: ['|a| = √(a₁² + a₂²)'],
      trap: 'A transformation description without its centre or line can be incomplete.',
      diagram: 'graph'
    },
    {
      terms: ['classification', 'characteristics of living organisms'],
      summary: 'Classification groups organisms using shared features and evolutionary evidence, while binomial names identify genus and species.',
      points: ['Use observable features to construct and follow dichotomous keys.', 'Distinguish a species from a broader taxonomic group.', 'At advanced level, combine molecular evidence with morphology.'],
      formulas: [],
      trap: 'A classification key must offer two mutually exclusive choices at each step.',
      diagram: 'flow'
    },
    {
      terms: ['human nutrition', 'digestive system'],
      summary: 'Human nutrition links a balanced diet to mechanical digestion, chemical digestion, absorption and assimilation.',
      points: ['Match each enzyme to its substrate, products and site of action.', 'Explain how villi and microvilli increase absorption.', 'Separate digestion, absorption, assimilation and egestion.'],
      formulas: [],
      trap: 'Bile is not an enzyme; it neutralises acid and emulsifies fat.',
      diagram: 'flow'
    },
    {
      terms: ['transport in animals'],
      summary: 'Mass transport moves respiratory gases, nutrients, hormones, heat and wastes between exchange surfaces and body cells.',
      points: ['Trace blood through the double circulation in the correct sequence.', 'Relate vessel wall structure to pressure and exchange.', 'Link blood components to transport, defence and clotting.'],
      formulas: ['cardiac output = heart rate × stroke volume'],
      trap: 'Arteries and veins are defined by flow direction relative to the heart.',
      diagram: 'circulation'
    },
    {
      terms: ['excretion'],
      summary: 'Excretion removes toxic materials, excess substances and metabolic waste, while osmoregulation controls water and ion balance.',
      points: ['Distinguish excretion from egestion.', 'Trace filtration, selective reabsorption and urine formation at the required level.', 'Relate liver deamination to urea production where listed.'],
      formulas: [],
      trap: 'Faeces is undigested material and is egested, not normally described as metabolic excretion.',
      diagram: 'flow'
    },
    {
      terms: ['coordination and response'],
      summary: 'Receptors detect stimuli and coordination systems produce responses through effectors. Plants and animals use different signalling mechanisms.',
      points: ['Trace a reflex arc in sequence.', 'Compare nervous and hormonal communication.', 'Explain plant tropisms through unequal growth responses.'],
      formulas: [],
      trap: 'A reflex is rapid and automatic but still travels through a defined neural pathway.',
      diagram: 'feedback'
    },
    {
      terms: ['drugs'],
      summary: 'A drug changes chemical reactions or signalling in the body. Medical benefits, dependence and harmful effects must be distinguished.',
      points: ['State the target or physiological effect rather than saying only that a drug is harmful.', 'Explain why antibiotics act on bacteria and not viruses.', 'Evaluate use through dose, benefit, side effects and resistance.'],
      formulas: [],
      trap: 'Misuse, tolerance, dependence and addiction are related but not interchangeable terms.',
      diagram: null
    },
    {
      terms: ['reproduction', 'development of organisms and continuity of life'],
      summary: 'Reproduction transmits genetic information. Asexual reproduction produces genetically similar offspring, while sexual reproduction creates variation.',
      points: ['Compare number of parents, gametes, fertilisation and genetic variation.', 'Trace reproductive structures to their functions.', 'Link hormones and developmental stages only where the syllabus lists them.'],
      formulas: [],
      trap: 'Growth increases size or cell number; development is a change in form or function.',
      diagram: 'flow'
    },
    {
      terms: ['acids bases and salts'],
      summary: 'Acids, bases and alkalis are identified by characteristic reactions, ions and pH. Salt preparation depends on solubility and reactant type.',
      points: ['Choose titration for two soluble reactants and precipitation for an insoluble salt.', 'Use excess insoluble solid to remove unreacted acid before crystallisation.', 'Write ionic equations where required.'],
      formulas: ['acid + base → salt + water'],
      trap: 'A base neutralises acid; an alkali is specifically a soluble base.',
      diagram: 'flow'
    },
    {
      terms: ['periodic table', 'group 2', 'group 17', 'nitrogen and sulfur', 'transition elements'],
      summary: 'Periodic trends arise from electron configuration, nuclear charge, shielding and bonding. Chemical comparisons require observations and balanced equations.',
      points: ['State the trend before explaining its atomic cause.', 'Use oxidation states and electron configurations consistently.', 'For transition elements, connect variable oxidation state, colour and catalysis to electronic structure only at the required depth.'],
      formulas: [],
      trap: 'Do not explain a trend using atomic radius alone when shielding and nuclear attraction are the underlying causes.',
      diagram: 'atom'
    },
    {
      terms: ['metals'],
      summary: 'Metal properties follow from metallic bonding, while reactivity determines extraction, corrosion and displacement behaviour.',
      points: ['Use the reactivity series to predict reactions.', 'Relate alloy structure to changed mechanical properties.', 'Select extraction by considering metal reactivity and economic or environmental costs.'],
      formulas: [],
      trap: 'An alloy is a mixture, not a compound with a fixed formula.',
      diagram: 'bonding'
    },
    {
      terms: ['chemistry of the environment'],
      summary: 'Environmental chemistry tracks sources, reactions and effects of substances in water and air, then evaluates methods of control.',
      points: ['Link each pollutant to a named source and consequence.', 'Distinguish greenhouse effect, climate change, acid rain and ozone effects.', 'Describe domestic water treatment in the correct order.'],
      formulas: [],
      trap: 'The greenhouse effect is natural; the concern is its enhancement by changing gas concentrations.',
      diagram: 'flow'
    },
    {
      terms: ['experimental techniques and chemical analysis'],
      summary: 'Practical chemistry requires suitable apparatus, controlled variables, safe technique, separation and evidence-based identification.',
      points: ['Choose apparatus from required precision and quantity.', 'Match separation method to solubility, boiling point or particle size.', 'Record observations separately from conclusions.'],
      formulas: ['Rᶠ = distance moved by solute / distance moved by solvent front'],
      trap: 'A colourless solution is an observation; identifying an ion is an inference requiring a test.',
      diagram: 'chromatography'
    },
    {
      terms: ['types and components of computer systems', 'input and output devices', 'storage devices and media'],
      summary: 'A computer system combines hardware, software, data and users. Device choice depends on the data source, required output and operating environment.',
      points: ['Explain how the device captures, stores or presents data.', 'Compare storage by capacity, speed, durability, portability and cost.', 'Distinguish primary memory from secondary storage.'],
      formulas: [],
      trap: 'Naming a device is not enough when the question asks why it suits the application.',
      diagram: 'cpu'
    },
    {
      terms: ['effects of using it', 'ict applications', 'digital divide', 'it in society'],
      summary: 'Technology changes access, work, communication, privacy and decision-making. Evaluation must include affected groups and realistic safeguards.',
      points: ['State the mechanism producing each benefit or risk.', 'Compare social, economic, legal and environmental impacts.', 'Recognise that access depends on infrastructure, skills, affordability and accessibility.'],
      formulas: [],
      trap: 'Avoid unsupported claims that technology is automatically faster, cheaper or fairer.',
      diagram: 'network'
    },
    {
      terms: ['systems life cycle'],
      summary: 'The systems life cycle moves from analysis and design through development, testing, implementation, documentation and evaluation.',
      points: ['Collect requirements from users and current-system evidence.', 'Choose a changeover method by risk and context.', 'Evaluate the final system against measurable requirements.'],
      formulas: [],
      trap: 'Testing checks operation; evaluation checks whether user requirements were met.',
      diagram: 'lifecycle'
    },
    {
      terms: ['audience', 'layout', 'styles', 'proofing', 'document production', 'presentations', 'website authoring'],
      summary: 'Digital products must be designed for their audience and purpose, then built with consistent structure, accessibility and evidence of checking.',
      points: ['Choose layout, navigation, typography and media for the stated audience.', 'Use styles and master features to preserve consistency.', 'Proof content, formatting, links and accessibility before export.'],
      formulas: [],
      trap: 'Adding more effects does not improve communication when they reduce clarity or consistency.',
      diagram: 'flow'
    },
    {
      terms: ['file management', 'mail merge'],
      summary: 'Reliable file workflows use meaningful names, suitable formats, deliberate folder structure and controlled data sources.',
      points: ['Choose a format that preserves the required features and compatibility.', 'For mail merge, distinguish the main document, data source, fields and merged output.', 'Protect sensitive data and validate imported records.'],
      formulas: [],
      trap: 'A file extension indicates format; changing only the extension does not convert the data.',
      diagram: 'flow'
    },
    {
      terms: ['images', 'graphics creation', 'animation', 'video and audio editing'],
      summary: 'Media editing balances quality, dimensions, compression, audience and file size while respecting copyright and accessibility.',
      points: ['Distinguish bitmap pixels from vector objects.', 'Use resolution, colour depth, frame rate and compression appropriately.', 'Preserve aspect ratio unless distortion is intentional.'],
      formulas: ['bitmap size ≈ width × height × colour depth'],
      trap: 'Increasing displayed dimensions cannot recreate detail absent from the source.',
      diagram: null
    },
    {
      terms: ['graphs and charts', 'data analysis and visualisation'],
      summary: 'A visualisation should match the data type and make comparisons clear without distorting scale or context.',
      points: ['Select chart type from the comparison or trend required.', 'Label axes, units, categories and legends.', 'Check filtered ranges and calculations before drawing conclusions.'],
      formulas: [],
      trap: 'A truncated or inconsistent axis can exaggerate a difference.',
      diagram: 'graph'
    },
    {
      terms: ['spreadsheets', 'modelling'],
      summary: 'A spreadsheet model uses formulas, functions and controlled inputs to calculate outputs and test scenarios.',
      points: ['Use relative and absolute references deliberately.', 'Separate assumptions, inputs, calculations and outputs.', 'Validate the model with known values, boundary cases and sensitivity checks.'],
      formulas: [],
      trap: 'A plausible output does not prove the model or formula is correct.',
      diagram: 'flow'
    },
    {
      terms: ['economic development'],
      summary: 'Development is multidimensional, so income measures should be combined with health, education, poverty and distribution evidence.',
      points: ['Distinguish economic growth from economic development.', 'Evaluate indicators for data quality and distribution hidden by averages.', 'Trace policies through productivity, opportunity and living standards.'],
      formulas: ['real GDP per head = real GDP / population'],
      trap: 'A higher average income does not show how income is distributed.',
      diagram: 'graph'
    },
    {
      terms: ['external influences on business activity'],
      summary: 'Political, economic, social, technological, legal, environmental and international changes alter business costs, demand, risk and strategy.',
      points: ['Identify the external change and the business exposure.', 'Develop the effect through cost, demand, operations or competition.', 'Evaluate how impact varies by size, market, finance and response.'],
      formulas: [],
      trap: 'The same external change can create an opportunity for one business and a threat for another.',
      diagram: 'stakeholders'
    },
    {
      terms: ['language development'],
      summary: 'Language-development explanations compare biological preparedness, learning processes and cognitive development.',
      points: ['State each explanation’s proposed mechanism.', 'Use evidence from development without confusing association with cause.', 'Evaluate nature–nurture interaction, culture and measurement.'],
      formulas: [],
      trap: 'Evidence for learning does not by itself rule out biological constraints.',
      diagram: 'flow'
    },
    {
      terms: ['fundamentals of accounting', 'financial accounting'],
      summary: 'Financial accounting records transactions and prepares information about performance, position and stewardship for users.',
      points: ['Apply the business-entity, accrual and consistency ideas correctly.', 'Distinguish assets, liabilities, capital, income and expenses.', 'Use statements and ratios together when assessing performance.'],
      formulas: ['assets = capital + liabilities'],
      trap: 'Business transactions are recorded separately from the owner’s personal transactions.',
      diagram: 'accounting-flow'
    },
    {
      terms: ['verification of accounting records', 'accounting procedures', 'reconciliation'],
      summary: 'Verification locates and corrects recording differences through trial balances, control accounts, reconciliations and error analysis.',
      points: ['Update the cash book before completing a bank reconciliation.', 'Know which errors affect trial-balance agreement.', 'Use control accounts to check totals and locate discrepancies.'],
      formulas: [],
      trap: 'Agreement of a trial balance does not prove that every transaction is correct.',
      diagram: 'flow'
    },
    {
      terms: ['accounting concepts and modern practice', 'regulatory and ethical'],
      summary: 'Accounting principles, ethics, technology and sustainability shape how information is prepared, controlled and communicated.',
      points: ['Apply consistency, prudence, going concern and materiality only in relevant contexts.', 'Recognise threats to integrity, objectivity and confidentiality.', 'Evaluate benefits and control risks of computerised systems.'],
      formulas: [],
      trap: 'Prudence manages uncertainty; it does not justify deliberate understatement.',
      diagram: null
    },
    {
      terms: ['emerging technologies', 'new and emerging technologies'],
      summary: 'Emerging technologies should be explained through inputs, processing and outputs, then evaluated for reliability, bias, privacy, cost and social impact.',
      points: ['Describe what the technology actually does.', 'Identify data and infrastructure requirements.', 'Evaluate benefits and risks for named stakeholders.'],
      formulas: [],
      trap: 'A product using advanced technology is not automatically intelligent or autonomous.',
      diagram: 'network'
    },
    {
      terms: ['physical quantities and units'],
      summary: 'Physical quantities require a numerical value and unit. Measurement quality depends on calibration, resolution, uncertainty and valid treatment of vectors.',
      points: ['Use base units to test dimensional consistency.', 'Combine percentage uncertainties appropriately for products and powers.', 'Resolve vectors into perpendicular components before combining them.'],
      formulas: ['percentage uncertainty = absolute uncertainty/value × 100%'],
      trap: 'Precision describes spread or resolution; accuracy describes closeness to the accepted value.',
      diagram: 'force'
    },
    {
      terms: ['forces density and pressure'],
      summary: 'Equilibrium requires zero resultant force and zero resultant moment. Density and pressure connect force or mass to area or volume.',
      points: ['Choose a pivot that simplifies the moment equation.', 'For equilibrium, check both translational and rotational conditions.', 'Fluid pressure acts normal to a surface and increases with depth.'],
      formulas: ['moment = force × perpendicular distance', 'ρ = m/V', 'p = F/A', 'Δp = ρgΔh'],
      trap: 'Moment distance is perpendicular distance to the force line of action.',
      diagram: 'force'
    },
    {
      terms: ['data processing and information'],
      summary: 'Data becomes useful information after validation, processing and presentation in a form suitable for the intended decision.',
      points: ['Distinguish data quality dimensions such as accuracy, relevance and timeliness.', 'Select batch, online or real-time processing from the task.', 'Use validation and verification for different purposes.'],
      formulas: [],
      trap: 'Valid data can still be inaccurate if it satisfies the rule but was entered wrongly.',
      diagram: 'flow'
    },
    {
      terms: ['monitoring and control'],
      summary: 'Monitoring records conditions; control compares sensor data with a target and changes the system through actuators and feedback.',
      points: ['Trace sensor, analogue-to-digital conversion, processor and actuator.', 'Distinguish continuous monitoring from automatic control.', 'Include safety limits and failure responses.'],
      formulas: [],
      trap: 'A sensor measures a physical quantity; an actuator changes the environment.',
      diagram: 'feedback'
    },
    {
      terms: ['pure mathematics'],
      summary: 'Pure mathematics connects algebra, functions, geometry, trigonometry and calculus through exact symbolic reasoning.',
      points: ['State domain restrictions and rejected roots.', 'Keep exact values until approximation is requested.', 'Use graph shape and algebraic checks to test the final result.'],
      formulas: [],
      trap: 'A calculator result is not a substitute for the algebraic method demanded by the question.',
      diagram: 'graph'
    },
    {
      terms: ['mechanics'],
      summary: 'Mechanics models particles and rigid bodies using forces, kinematics, momentum and energy under explicitly stated assumptions.',
      points: ['Draw a force diagram and choose a positive direction.', 'Use one consistent model and coordinate system.', 'Check whether a string is taut, contact is maintained and motion direction matches the sign.'],
      formulas: ['F = ma', 'p = mv', 'W = Fs', 'P = Fv'],
      trap: 'A negative answer usually communicates direction; interpret it before reporting.',
      diagram: 'force'
    },
    {
      terms: ['government microeconom', 'government macroeconomic intervention'],
      summary: 'Government intervention changes incentives, spending, costs or productive capacity in pursuit of policy objectives, but creates trade-offs and possible unintended effects.',
      points: ['Name the instrument and transmission mechanism.', 'Distinguish short-run demand effects from long-run supply effects.', 'Evaluate time lags, information, enforcement, opportunity cost and distribution.'],
      formulas: [],
      trap: 'A policy direction is not enough; explain how it reaches the stated objective.',
      diagram: 'macro'
    },
    {
      terms: ['international economic issues'],
      summary: 'International issues connect trade, exchange rates, globalisation, development and policy choices across interdependent economies.',
      points: ['Develop effects on consumers, firms, government and external balance.', 'Use elasticity and time period when judging exchange-rate effects.', 'Compare growth with development and distribution.'],
      formulas: [],
      trap: 'A current-account change cannot be predicted from price direction alone.',
      diagram: 'trade'
    },
    {
      terms: ['biological approach'],
      summary: 'The biological approach explains behaviour through brain processes, hormones, genetics and evolution, while recognising interaction with experience.',
      points: ['Know each core study’s aim, method, sample, findings and conclusion.', 'Link the evidence to the biological mechanism actually investigated.', 'Evaluate reductionism, determinism, ethics and generalisability.'],
      formulas: [],
      trap: 'A biological correlate is not automatically proof of biological causation.',
      diagram: 'research'
    },
    {
      terms: ['cost and management accounting'],
      summary: 'Management accounting classifies costs and uses costing, contribution, budgets, variances and investment evidence for internal decisions.',
      points: ['Separate fixed, variable, direct and indirect costs.', 'Use contribution consistently in marginal costing.', 'Interpret calculations with capacity, risk and qualitative evidence.'],
      formulas: ['contribution = sales − variable cost', 'break-even output = fixed cost/contribution per unit'],
      trap: 'Allocated fixed overhead can affect reported unit cost without changing total cash outflow.',
      diagram: 'break-even'
    },
    {
      terms: ['ethics and ownership'],
      summary: 'Computing decisions involve privacy, intellectual property, access, accountability and environmental impact as well as technical performance.',
      points: ['Identify the stakeholder and the specific right or risk.', 'Distinguish legal permission from ethical acceptability.', 'Recommend a proportionate safeguard and acknowledge its limitation.'],
      formulas: [],
      trap: 'Publicly accessible data is not automatically free from ownership or privacy obligations.',
      diagram: null
    },
    {
      terms: ['biodiversity and conservation'],
      summary: 'Biodiversity can be measured at genetic, species and ecosystem levels, while conservation weighs ecological, economic and social priorities.',
      points: ['Use representative sampling and a defined diversity measure where required.', 'Explain threats through population and habitat mechanisms.', 'Compare in-situ and ex-situ conservation.'],
      formulas: [],
      trap: 'Species richness alone ignores relative abundance.',
      diagram: 'food-web'
    },
    {
      terms: ['media organised', 'media influence'],
      summary: 'Media sociology examines ownership, selection, representation and audience response using competing models of power and influence.',
      points: ['Distinguish production, content and audience evidence.', 'Compare direct-effects and active-audience explanations.', 'Evaluate ownership concentration, algorithms, culture and research method.'],
      formulas: [],
      trap: 'Exposure and behaviour may be associated without a simple one-way causal effect.',
      diagram: 'network'
    },
    {
      terms: ['religion maintain', 'significant is religion'],
      summary: 'Sociological perspectives disagree over whether religion creates solidarity, legitimates inequality, enables change or is declining and transforming.',
      points: ['Define secularisation using more than one indicator.', 'Compare functionalist, Marxist, feminist and interpretive explanations where required.', 'Use evidence from different societies and religious forms.'],
      formulas: [],
      trap: 'Falling attendance does not by itself prove that belief or religious influence has disappeared.',
      diagram: 'network'
    }
  ],
  lowerRules: [
    {
      terms: ['motion forces and energy'],
      summary: 'This topic links measured motion to resultant forces and energy transfers. Use scalar–vector language, interpret motion graphs and keep every quantity in SI units.',
      points: ['Speed is distance per time; velocity also has direction.', 'A resultant force changes velocity, while balanced forces give zero acceleration.', 'Energy is transferred between stores and total energy is conserved.'],
      formulas: ['speed = distance/time', 'acceleration = change in velocity/time', 'F = ma', 'p = mv', 'W = Fd', 'P = E/t'],
      trap: 'Constant speed does not always mean zero resultant force because direction may change.',
      diagram: 'motion-graph'
    },
    {
      terms: ['thermal physics'],
      summary: 'The particle model explains states, temperature, expansion and thermal transfer without adding advanced thermodynamic equations.',
      points: ['Heating increases internal energy; temperature measures thermal state.', 'Conduction, convection and radiation transfer energy by different mechanisms.', 'During a change of state, supplied energy changes particle separation while temperature remains constant.'],
      formulas: ['specific heat capacity = energy/(mass × temperature change)'],
      trap: 'Particles do not themselves expand; their motion and average separation change.',
      diagram: 'particles'
    },
    {
      terms: ['waves'],
      summary: 'Waves transfer energy without net transfer of matter. Describe wave quantities and use reflection, refraction, diffraction and superposition only to the depth listed in the syllabus.',
      points: ['Transverse vibrations are perpendicular to travel; longitudinal vibrations are parallel.', 'Refraction occurs because wave speed changes at a boundary.', 'Diffraction becomes more noticeable when gap size is comparable with wavelength.'],
      formulas: ['wave speed = frequency × wavelength'],
      trap: 'Frequency is fixed by the source when a wave crosses a boundary.',
      diagram: 'wave'
    },
    {
      terms: ['electricity and magnetism'],
      summary: 'Charge, current, potential difference and resistance describe circuits; magnetic fields explain forces and electromagnetic effects.',
      points: ['Current is charge flow rate and potential difference is energy transferred per unit charge.', 'Series and parallel circuits obey conservation of charge and energy.', 'Changing magnetic flux can induce an e.m.f.'],
      formulas: ['I = Q/t', 'V = W/Q', 'V = IR', 'P = IV', 'E = IVt'],
      trap: 'Potential difference is energy transferred per charge, not a substance consumed by components.',
      diagram: 'circuit'
    },
    {
      terms: ['nuclear physics'],
      summary: 'The nuclear model distinguishes protons, neutrons and electrons, while radioactive decay is spontaneous and random.',
      points: ['Balance nucleon number and charge in nuclear equations.', 'Compare alpha, beta and gamma by ionising ability, penetration and deflection.', 'Use repeated halving to solve half-life questions.'],
      formulas: ['count rate = counts/time'],
      trap: 'Background count rate must be subtracted before interpreting a source measurement.',
      diagram: 'decay'
    },
    {
      terms: ['space physics'],
      summary: 'Space physics uses gravity, orbital motion, stellar evolution and observations of the Universe at the qualitative and numerical depth specified for IGCSE or O Level.',
      points: ['Gravity provides the force for orbits.', 'A star’s life cycle depends strongly on its initial mass.', 'Redshift from distant galaxies supports an expanding Universe.'],
      formulas: ['orbital speed = 2πr/T'],
      trap: 'A planet and its star orbit a common centre of mass; an orbit is continuous free fall.',
      diagram: 'stars'
    },
    {
      terms: ['states of matter'],
      summary: 'Solids, liquids and gases differ in particle arrangement, separation and motion. The particle model explains changes of state and diffusion.',
      points: ['Heating increases average particle kinetic energy.', 'A change of state is physical because no new substance forms.', 'Diffusion is faster when particles move faster or have less mass.'],
      formulas: [],
      trap: 'Particles remain present during a state change; their arrangement and energy change.',
      diagram: 'particles'
    },
    {
      terms: ['stoichiometry'],
      summary: 'Convert the given quantity to moles, apply the balanced-equation ratio, then convert to the requested mass, concentration or gas volume.',
      points: ['Balance equations before using mole ratios.', 'Use relative formula mass consistently.', 'At room conditions use the molar gas volume stated by the syllabus or question.'],
      formulas: ['moles = mass/molar mass', 'moles = concentration × volume', 'gas moles = gas volume/molar gas volume'],
      trap: 'Convert cm³ to dm³ before using concentration in mol dm⁻³.',
      diagram: 'stoich'
    },
    {
      terms: ['electrochemistry'],
      summary: 'Electrolysis decomposes an ionic substance using electricity. Mobile ions carry charge and are discharged at electrodes.',
      points: ['Cations move to the cathode and are reduced.', 'Anions move to the anode and are oxidised.', 'Predict products from the electrolyte, concentration and electrode material required by the syllabus.'],
      formulas: [],
      trap: 'Electrons travel in the external circuit; ions carry charge through the electrolyte.',
      diagram: 'electrolysis'
    },
    {
      terms: ['chemical energetics'],
      summary: 'Exothermic reactions transfer energy to the surroundings; endothermic reactions take in energy. Energy profiles show activation energy and overall energy change.',
      points: ['Bond breaking requires energy and bond making releases energy.', 'A catalyst lowers activation energy without changing the overall energy change.', 'Use temperature-change evidence only after considering experimental heat loss.'],
      formulas: ['energy transferred = mass × specific heat capacity × temperature change'],
      trap: 'Activation energy is not the same as the energy change of reaction.',
      diagram: 'energy-profile'
    },
    {
      terms: ['chemical reactions'],
      summary: 'This topic connects physical and chemical change, reaction rate, reversible reactions, equilibrium and redox at the stated school-level depth.',
      points: ['Rate increases when successful collisions occur more frequently.', 'At dynamic equilibrium, forward and reverse reactions continue at equal rates.', 'Oxidation and reduction occur together through oxygen or electron transfer as required.'],
      formulas: ['rate = change in quantity/time'],
      trap: 'Equal forward and reverse rates do not require equal reactant and product concentrations.',
      diagram: 'energy-profile'
    },
    {
      terms: ['organic chemistry'],
      summary: 'Recognise homologous series from functional groups, name the required compounds and connect each reaction to its reagent, condition and product.',
      points: ['Alkanes are saturated; alkenes contain a carbon–carbon double bond.', 'Cracking makes smaller, more useful molecules.', 'Distinguish addition polymers from condensation polymers only where listed.'],
      formulas: [],
      trap: 'A molecular formula does not show how atoms are connected; use the requested structural representation.',
      diagram: 'organic-route'
    }
  ]
};
