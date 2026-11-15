import os

robots = [
    {
        'id': 'tesla-optimus-gen2',
        'code': 'OPT-02',
        'name': 'Tesla Optimus Gen 2',
        'org': 'Tesla, Inc.',
        'color1': '#E11D48',
        'color2': '#FB7185',
        'dof': '28 + 11 Hand DoF',
        'actuators': 'Custom Tesla Actuators',
        'vision': 'Tesla Full Self-Driving (FSD) Cameras',
        'compute': 'Tesla HW4 / AI SoC',
        'height': '173 cm (5 ft 8 in)',
        'weight': '57 kg (126 lbs)',
    },
    {
        'id': 'figure-02',
        'code': 'FIG-02',
        'name': 'Figure 02',
        'org': 'Figure AI',
        'color1': '#0284C7',
        'color2': '#38BDF8',
        'dof': '16 Hand DoF / Whole-body',
        'actuators': 'Integrated Custom Electric Actuators',
        'vision': '6 Onboard RGB Cameras (360°)',
        'compute': 'NVIDIA Dual Drive Thor / On-robot VLM',
        'height': '168 cm (5 ft 6 in)',
        'weight': '70 kg (154 lbs)',
    },
    {
        'id': 'boston-dynamics-atlas',
        'code': 'ATLAS',
        'name': 'All-Electric Atlas',
        'org': 'Boston Dynamics',
        'color1': '#D97706',
        'color2': '#FBBF24',
        'dof': '360° Continuous Rotational Joints',
        'actuators': 'High-torque Electric Rotary Actuators',
        'vision': 'Head-ring Depth Sensors & RGB Stereo',
        'compute': 'High-rate Real-time Motion Engine',
        'height': '150 cm (4 ft 11 in)',
        'weight': '89 kg (196 lbs)',
    },
    {
        'id': 'unitree-g1',
        'code': 'G1-AIR',
        'name': 'Unitree G1 Humanoid Agent',
        'org': 'Unitree Robotics',
        'color1': '#059669',
        'color2': '#34D399',
        'dof': '23 to 43 DoF (Optional Hand Modules)',
        'actuators': 'Max 120 N·m High-Speed Joint Motors',
        'vision': 'Intel RealSense Depth + 3D LiDAR',
        'compute': '8-core High-performance CPU / Edge AI',
        'height': '132 cm (4 ft 4 in)',
        'weight': '35 kg (77 lbs)',
    },
    {
        'id': 'sanctuary-phoenix-gen7',
        'code': 'PHX-07',
        'name': 'Phoenix Gen 7',
        'org': 'Sanctuary AI',
        'color1': '#7C3AED',
        'color2': '#A78BFA',
        'dof': 'Human-like Hands (20 DoF w/ Haptics)',
        'actuators': 'Hydraulic/Electric Micro-motion Hybrids',
        'vision': 'Carbon Omnidirectional AI Vision',
        'compute': 'Carbon Cognitive Platform',
        'height': '170 cm (5 ft 7 in)',
        'weight': '70 kg (155 lbs)',
    },
    {
        'id': '1x-neo-beta',
        'code': 'NEO-B',
        'name': '1X Technologies NEO Beta',
        'org': '1X Technologies',
        'color1': '#4F46E5',
        'color2': '#818CF8',
        'dof': 'Bio-inspired Tendon-driven Joints',
        'actuators': 'Tendon-driven In-house High-Torque',
        'vision': 'Wide-angle Stereo Head Cameras',
        'compute': 'Onboard Embodied Learning System',
        'height': '165 cm (5 ft 5 in)',
        'weight': '30 kg (66 lbs)',
    },
    {
        'id': 'agility-digit',
        'code': 'DGT-V4',
        'name': 'Agility Robotics Digit',
        'org': 'Agility Robotics',
        'color1': '#EA580C',
        'color2': '#FB923C',
        'dof': 'Digitigrade Backward-curving Legs (30 DoF)',
        'actuators': 'Harmonic Drive Electric Actuators',
        'vision': 'Multi-camera Vision & 3D Depth LiDAR',
        'compute': 'Agility Arc Fleet Controller / Edge PC',
        'height': '175 cm (5 ft 9 in)',
        'weight': '65 kg (143 lbs)',
    },
    {
        'id': 'xiaomi-cyberone',
        'code': 'CYB-01',
        'name': 'Xiaomi CyberOne',
        'org': 'Xiaomi Robotics Lab',
        'color1': '#F97316',
        'color2': '#FDBA74',
        'dof': '21 Freedom Degrees Whole-body',
        'actuators': 'Peak 300 N·m High-Efficiency Motors',
        'vision': 'Mi-Sense Environmental 3D Perception',
        'compute': 'MiAI AI Vocal & Emotion Engine',
        'height': '177 cm (5 ft 10 in)',
        'weight': '52 kg (115 lbs)',
    },
    {
        'id': 'apptronik-apollo',
        'code': 'APL-01',
        'name': 'Apptronik Apollo',
        'org': 'Apptronik',
        'color1': '#2563EB',
        'color2': '#60A5FA',
        'dof': 'Modular Architecture / Gross Motor Control',
        'actuators': 'Linear Electric Actuators & Swappable Pack',
        'vision': 'Perception Mast & Depth Stereo Cameras',
        'compute': 'Modular Industrial Edge Compute',
        'height': '173 cm (5 ft 8 in)',
        'weight': '73 kg (160 lbs)',
    },
    {
        'id': 'fourier-gr-2',
        'code': 'GR-02',
        'name': 'Fourier Intelligence GR-2',
        'org': 'Fourier Intelligence',
        'color1': '#0891B2',
        'color2': '#22D3EE',
        'dof': '53 Full-body Degrees of Freedom',
        'actuators': 'FSA High-performance Integrated Actuators',
        'vision': 'Multi-modal Vision & Force-torque Feedback',
        'compute': 'Edge Neural Brain w/ ROS2 Framework',
        'height': '175 cm (5 ft 9 in)',
        'weight': '63 kg (139 lbs)',
    },
    {
        'id': 'engine-arts-ameca',
        'code': 'AMC-01',
        'name': 'Engineered Arts Ameca',
        'org': 'Engineered Arts',
        'color1': '#9333EA',
        'color2': '#C084FC',
        'dof': 'Advanced Facial Articulation & Mimicry',
        'actuators': 'Precision Pneumatics / Micro-steppers',
        'vision': 'Binocular Eye Cameras & Face Tracking',
        'compute': 'Tritium Cloud Robotics / GPT-4o LLM',
        'height': '187 cm (6 ft 2 in)',
        'weight': '60 kg (132 lbs)',
    },
    {
        'id': 'honda-asimo-tribute',
        'code': 'ASM-00',
        'name': 'Honda ASIMO (Pioneer Tribute)',
        'org': 'Honda Motor Co.',
        'color1': '#64748B',
        'color2': '#94A3B8',
        'dof': '57 Degrees of Freedom (2011 Final)',
        'actuators': 'Precision Harmonic Drive Servo Motors',
        'vision': 'Stereo Optical Sensor Eyes & Floor Sensors',
        'compute': 'Honda Autonomous Behavior Control System',
        'height': '130 cm (4 ft 3 in)',
        'weight': '48 kg (106 lbs)',
    }
]

os.makedirs('public/images/humanoids', exist_ok=True)

for r in robots:
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad_{r['code']}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0e17"/>
      <stop offset="50%" stop-color="{r['color1']}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <radialGradient id="mesh_{r['code']}" cx="20%" cy="15%" r="75%">
      <stop offset="0%" stop-color="{r['color2']}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad_{r['code']})"/>
  <rect width="100%" height="100%" fill="url(#mesh_{r['code']})"/>

  <!-- Top Status Bar -->
  <rect x="36" y="28" width="728" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
  <circle cx="56" cy="46" r="6" fill="{r['color2']}"/>
  <text x="72" y="50" font-family="monospace" font-size="12" font-weight="700" fill="{r['color2']}" letter-spacing="1">HUMANOID BLUEPRINT ARCHITECTURE // {r['code']}</text>
  <text x="744" y="50" text-anchor="end" font-family="monospace" font-size="12" fill="#94A3B8">{r['org'].upper()}</text>

  <!-- Left Column: Title & Key Stats -->
  <text x="44" y="112" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">{r['name']}</text>
  <text x="44" y="136" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">DEVELOPER: {r['org']}</text>

  <!-- Spec Box 1 -->
  <rect x="44" y="162" width="330" height="64" rx="8" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.08)"/>
  <text x="58" y="184" font-family="monospace" font-size="10" font-weight="700" fill="#94A3B8" letter-spacing="0.5">FREEDOM DEGREES &amp; ARTICULATION</text>
  <text x="58" y="208" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="{r['color2']}">{r['dof']}</text>

  <!-- Spec Box 2 -->
  <rect x="44" y="236" width="330" height="64" rx="8" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.08)"/>
  <text x="58" y="258" font-family="monospace" font-size="10" font-weight="700" fill="#94A3B8" letter-spacing="0.5">PERCEPTION &amp; SENSORS</text>
  <text x="58" y="282" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#E2E8F0">{r['vision']}</text>

  <!-- Spec Box 3 -->
  <rect x="44" y="310" width="330" height="64" rx="8" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.08)"/>
  <text x="58" y="332" font-family="monospace" font-size="10" font-weight="700" fill="#94A3B8" letter-spacing="0.5">ACTUATION &amp; MOTOR UNITS</text>
  <text x="58" y="356" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#E2E8F0">{r['actuators']}</text>

  <!-- Spec Box 4 (Height & Weight) -->
  <rect x="44" y="384" width="330" height="54" rx="8" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.08)"/>
  <text x="58" y="404" font-family="monospace" font-size="10" font-weight="700" fill="#94A3B8" letter-spacing="0.5">HEIGHT &amp; WEIGHT SPEC</text>
  <text x="58" y="424" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F1F5F9">{r['height']}  •  {r['weight']}</text>

  <!-- Right Column: Schematic Wireframe & Diagram -->
  <rect x="398" y="100" width="366" height="338" rx="12" fill="rgba(15,23,42,0.75)" stroke="{r['color1']}" stroke-opacity="0.35"/>
  <path d="M 414 116 L 430 116 M 414 116 L 414 132" fill="none" stroke="{r['color2']}" stroke-width="2"/>
  <path d="M 748 116 L 732 116 M 748 116 L 748 132" fill="none" stroke="{r['color2']}" stroke-width="2"/>
  <path d="M 414 422 L 430 422 M 414 422 L 414 406" fill="none" stroke="{r['color2']}" stroke-width="2"/>
  <path d="M 748 422 L 732 422 M 748 422 L 748 406" fill="none" stroke="{r['color2']}" stroke-width="2"/>

  <!-- Humanoid Silhouette / Technical Vector Figure -->
  <g transform="translate(581, 145)" stroke="{r['color2']}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Head -->
    <rect x="-18" y="0" width="36" height="42" rx="10" fill="rgba(255,255,255,0.05)" stroke="{r['color2']}"/>
    <!-- Visor -->
    <line x1="-12" y1="16" x2="12" y2="16" stroke="{r['color1']}" stroke-width="3"/>
    <!-- Neck -->
    <line x1="0" y1="42" x2="0" y2="52"/>
    <!-- Torso / Chest -->
    <polygon points="-38,52 38,52 30,126 -30,126" fill="rgba(255,255,255,0.04)" stroke="{r['color2']}"/>
    <circle cx="0" cy="85" r="12" stroke="{r['color1']}" stroke-width="1.5"/>
    <!-- Shoulders & Arms -->
    <circle cx="-44" cy="62" r="7"/>
    <circle cx="44" cy="62" r="7"/>
    <line x1="-44" y1="69" x2="-52" y2="120"/>
    <circle cx="-52" cy="120" r="5"/>
    <line x1="-52" y1="125" x2="-56" y2="165"/>
    <!-- Right Arm -->
    <line x1="44" y1="69" x2="52" y2="120"/>
    <circle cx="52" cy="120" r="5"/>
    <line x1="52" y1="125" x2="56" y2="165"/>
    <!-- Pelvis -->
    <rect x="-24" y="126" width="48" height="22" rx="6" fill="rgba(255,255,255,0.03)"/>
    <!-- Legs -->
    <circle cx="-16" cy="154" r="6"/>
    <circle cx="16" cy="154" r="6"/>
    <line x1="-16" y1="160" x2="-20" y2="210"/>
    <circle cx="-20" cy="210" r="5"/>
    <line x1="-20" y1="215" x2="-22" y2="258"/>
    <!-- Foot L -->
    <path d="M -22 258 L -34 262 L -12 262 Z" fill="rgba(255,255,255,0.08)"/>
    <!-- Leg R -->
    <line x1="16" y1="160" x2="20" y2="210"/>
    <circle cx="20" cy="210" r="5"/>
    <line x1="20" y1="215" x2="22" y2="258"/>
    <!-- Foot R -->
    <path d="M 22 258 L 10 262 L 32 262 Z" fill="rgba(255,255,255,0.08)"/>
  </g>

  <!-- Technical Overlay Labels -->
  <text x="418" y="140" font-family="monospace" font-size="10" fill="{r['color2']}">RADIAL COMPLIANCE: OK</text>
  <text x="418" y="156" font-family="monospace" font-size="10" fill="#64748B">KINEMATICS: BIPEDAL CLOSED-LOOP</text>
  <text x="418" y="172" font-family="monospace" font-size="10" fill="#64748B">BRAIN: {r['compute'].upper()}</text>
  <text x="748" y="416" text-anchor="end" font-family="monospace" font-size="10" fill="{r['color2']}">EMBODIED AI STACK</text>
</svg>"""
    filepath = f"public/images/humanoids/humanoid_{r['id']}.svg"
    with open(filepath, 'w') as f:
        f.write(svg)
    print(f"Generated {filepath}")

