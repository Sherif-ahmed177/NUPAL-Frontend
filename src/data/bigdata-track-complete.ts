// Big Data Track - Hardcoded grid layout
export const BIGDATA_TRACK_COMPLETE = {
    id: 'bigdata',
    label: 'Big Data Track',
    color: '#F59E0B',
    description: 'Specialize in data science, big data analytics, and machine learning.',
    nodes: [
        // Column 0: Math & Basic Core
        { id: 'MATH100', label: 'MATH 100\nPre-Calculus Mathematics', category: 'Math', gridPos: { col: 0, row: 0 }, position: { x: -2587.98, y: -1593.64 } },
        { id: 'MATH111', label: 'MATH 111\nAnalytical Geometry &\nCalculus I', category: 'Math', gridPos: { col: 0, row: 2 }, position: { x: -2639.58, y: -1191.49 } },
        { id: 'CSCI101', label: 'CSCI 101\nComputer &\nInformation Skills', category: 'Core', gridPos: { col: 0, row: 4 }, position: { x: -2637.43, y: -797.94 } },
        { id: 'CSCI102', label: 'CSCI 102\nIntroduction to\nProgramming', category: 'Core', gridPos: { col: 0, row: 6 }, position: { x: -2635.27, y: -393.64 } },
        { id: 'PHYS101', label: 'PHYS 101\nPhysics I', category: 'Math', gridPos: { col: 0, row: 12 }, position: { x: -2587.98, y: 806.37 } },

        // Column 1: Advanced Math & Programming
        { id: 'MATH112', label: 'MATH 112\nCalculus II', category: 'Math', gridPos: { col: 1, row: 1 }, position: { x: -1996.58, y: -1516.16 } },
        { id: 'MATH201', label: 'MATH 201\nProbability & Statistics', category: 'Math', gridPos: { col: 1, row: 3 }, position: { x: -1996.58, y: -1180.65 } },
        { id: 'MATH211', label: 'MATH 211\nDiscrete Mathematics', category: 'Math', gridPos: { col: 1, row: 5 }, position: { x: -2095.46, y: -847.28 } },
        { id: 'CSCI112', label: 'CSCI 112\nIntermediate Programming', category: 'Core', gridPos: { col: 1, row: 7 }, position: { x: -1934.91, y: -188.50 } },
        { id: 'ECEN101', label: 'ECEN 101\nElectric Circuits', category: 'Math', gridPos: { col: 1, row: 12 }, position: { x: -1987.99, y: 806.37 } },

        // Column 2: Core CS & Systems
        { id: 'MATH210', label: 'MATH 210\nCalculus III', category: 'Math', gridPos: { col: 2, row: 0 }, position: { x: -1407.33, y: -1690.37 } },
        { id: 'MATH203', label: 'MATH 203\nDifferential Equations', category: 'Math', gridPos: { col: 2, row: 1 }, position: { x: -1405.18, y: -1516.16 } },
        { id: 'MATH301', label: 'MATH 301\nLinear Algebra', category: 'Math', gridPos: { col: 2, row: 2 }, position: { x: -1405.18, y: -1352.70 } },
        { id: 'CSCI205', label: 'CSCI 205\nIntroduction to\nComputer Systems', category: 'Systems', gridPos: { col: 2, row: 6 }, position: { x: -1939.37, y: -393.64 } },
        { id: 'CSCI207', label: 'CSCI 207\nData Structures &\nAlgorithms', category: 'Core', gridPos: { col: 2, row: 7.5 }, position: { x: -1540.39, y: -198.09 } },
        { id: 'CSCI221', label: 'CSCI 221\nLogic Design', category: 'Systems', gridPos: { col: 2, row: 13 }, position: { x: -1387.99, y: 1006.37 } },

        // Column 3: Algorithms & Specialized Core
        { id: 'CSCI322', label: 'CSCI 322\nData Analysis', category: 'Track', gridPos: { col: 3, row: 3 }, position: { x: -1164.15, y: -1180.65 } },
        { id: 'CSCI208', label: 'CSCI 208\nDesign &\nAnalysis of Algorithms', category: 'Core', gridPos: { col: 3, row: 5 }, position: { x: -1214.49, y: -593.64 } },
        { id: 'CSCI217', label: 'CSCI 217\nAdvanced Programming\nConcepts', category: 'Core', gridPos: { col: 3, row: 7.5 }, position: { x: -924.39, y: -196.23 } },
        { id: 'CSCI311', label: 'CSCI 311\nComputer Architecture', category: 'Systems', gridPos: { col: 3, row: 13 }, position: { x: -804.67, y: 999.40 } },

        // Column 4: Big Data specialization
        { id: 'CSCI461', label: 'CSCI 461\nIntroduction to Big Data', category: 'Track', gridPos: { col: 4, row: 3 }, position: { x: -187.98, y: -793.64 } },
        { id: 'CSCI467', label: 'CSCI 467\nData Preparation and\nVisualization', category: 'Track', gridPos: { col: 4, row: 1 }, position: { x: -397.34, y: -1215.68 } },
        { id: 'CSCI417', label: 'CSCI 417\nMachine Intelligence', category: 'Track', gridPos: { col: 4, row: 5 }, position: { x: -141.87, y: -409.33 } },
        { id: 'CSCI419', label: 'CSCI 419\nTheory of Computing', category: 'Track', gridPos: { col: 4, row: 7 }, position: { x: -148.94, y: 6.37 } },
        { id: 'CSCI313', label: 'CSCI 313\nSoftware Engineering', category: 'Systems', gridPos: { col: 4, row: 9 }, position: { x: -187.98, y: 406.37 } },
        { id: 'CSCI305', label: 'CSCI 305\nDatabase Systems', category: 'Systems', gridPos: { col: 4, row: 10.5 }, position: { x: -147.08, y: -189.77 } },
        { id: 'CSCI463', label: 'CSCI 463\nIntroduction to\nComputer Networks', category: 'Systems', gridPos: { col: 4, row: 12 }, position: { x: -898.83, y: 77.66 } },
        { id: 'CSCI315', label: 'CSCI 315\nOperating Systems', category: 'Systems', gridPos: { col: 4, row: 13.5 }, position: { x: -187.98, y: 1306.37 } },

        // Column 5: Advanced Big Data
        { id: 'CSCI415', label: 'CSCI 415\nCompiler Design', category: 'Systems', gridPos: { col: 5, row: 9 }, position: { x: 412.02, y: 406.37 } },
        { id: 'CSCI462', label: 'CSCI 462\nBig Data Analytics', category: 'Track', gridPos: { col: 5, row: 5 }, position: { x: 499.86, y: -410.03 } },
        { id: 'CSCI464', label: 'CSCI 464\nInformation Retrieval', category: 'Track', gridPos: { col: 5, row: 7 }, position: { x: -59.67, y: -666.95 } },
        { id: 'CSCI469', label: 'CSCI 469\nBig Data Management', category: 'Track', gridPos: { col: 5, row: 3 }, position: { x: 487.86, y: -799.73 } },
        { id: 'CSCI465', label: 'CSCI 465\nBig Data Applications', category: 'Track', gridPos: { col: 5, row: 11 }, position: { x: 333.90, y: -143.98 } },

        // Projects
        { id: 'CSCI495', label: 'CSCI 495\nSenior Project I', category: 'Senior', gridPos: { col: 6, row: 12.5 }, position: { x: 303.39, y: 791.50 } },
        { id: 'CSCI496', label: 'CSCI 496\nSenior Project II', category: 'Senior', gridPos: { col: 7, row: 12.5 }, position: { x: 749.73, y: 794.06 } },

        // General Education (Matching General Track)
        { id: 'ENGL101', label: 'ENGL 101\nEnglish I', category: 'English', gridPos: { col: 8, row: 0 }, position: { x: 459.25, y: 1269.23 } },
        { id: 'ENGL102', label: 'ENGL 102\nEnglish II', category: 'English', gridPos: { col: 9, row: 0 }, position: { x: 810.58, y: 1409.50 } },
        { id: 'ENGL201', label: 'ENGL 201\nWriting Skills', category: 'English', gridPos: { col: 10, row: 0 }, position: { x: 1136.41, y: 1588.03 } },
        { id: 'ENGL202', label: 'ENGL 202\nCommunication &\nPresentation Skills', category: 'English', gridPos: { col: 11, row: 0 }, position: { x: 1467.97, y: 1690.37 } },
        { id: 'HUMA101', label: 'HUMA 101\nIntroduction to Logic\nand Critical Thinking', category: 'Huma', gridPos: { col: 9, row: 16 }, position: { x: 1705.36, y: 393.65 } },
        { id: 'HUMA102', label: 'HUMA 102\nIntroduction to Ethics', category: 'Huma', gridPos: { col: 10, row: 16 }, position: { x: 1704.10, y: 581.62 } },
        { id: 'HUMA103', label: 'HUMA 103\nSelected Topics in\nHumanities & Arts', category: 'Huma', gridPos: { col: 11, row: 16 }, position: { x: 1702.61, y: 766.63 } },
        { id: 'NSCI_COMBO', label: 'NSCI / NSCI / HUMA', category: 'SSCI', gridPos: { col: 11, row: 17.5 }, position: { x: 1697.79, y: 1019.55 } },
        { id: 'SSCI101', label: 'SSCI 101\nSelected Topics in\nEgyptian & Arab\nHeritage', category: 'SSCI', gridPos: { col: 9, row: 18 }, position: { x: 2125.80, y: 373.17 } },
        { id: 'SSCI102', label: 'SSCI 102\nSelected Topics in\nWorld Cultures &\nDiversity', category: 'SSCI', gridPos: { col: 10, row: 18 }, position: { x: 2121.93, y: 599.62 } },
        { id: 'SSCI301', label: 'SSCI 301\nProject Management', category: 'SSCI', gridPos: { col: 11, row: 19 }, position: { x: 2111.20, y: 827.07 } },
        { id: 'NSCI102', label: 'NSCI 102\nSelected Topics in\nSocial Sciences', category: 'SSCI', gridPos: { col: 11, row: 20.5 }, position: { x: 2114.63, y: 1017.28 } },
        { id: 'COMM401', label: 'COMM 401\nInternship and Service\nLearning', category: 'SSCI', gridPos: { col: 11, row: 22 }, position: { x: 2636.15, y: 620.76 } },
        { id: 'CSCI490', label: 'CSCI 490\nIndustrial/Research\nTraining', category: 'SSCI', gridPos: { col: 11, row: 23.5 }, position: { x: 2639.58, y: 831.56 } }
    ],
    edges: [
        { id: 'e-MATH100-', source: 'MATH100', target: '', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH111-MATH112', source: 'MATH111', target: 'MATH112', sourceHandle: 'right-0', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH111-MATH201', source: 'MATH111', target: 'MATH201', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH111-MATH211', source: 'MATH111', target: 'MATH211', sourceHandle: 'right-10', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 50, targetOffsetY: 0 } } },
        { id: 'e-MATH112-MATH210', source: 'MATH112', target: 'MATH210', sourceHandle: 'right-0', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH112-MATH203', source: 'MATH112', target: 'MATH203', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH112-MATH301', source: 'MATH112', target: 'MATH301', sourceHandle: 'right-10', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI102-CSCI112', source: 'CSCI102', target: 'CSCI112', sourceHandle: 'right-9', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI102-CSCI205', source: 'CSCI102', target: 'CSCI205', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI112-CSCI207', source: 'CSCI112', target: 'CSCI207', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-PHYS101-ECEN101', source: 'PHYS101', target: 'ECEN101', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-PHYS101-CSCI221', source: 'PHYS101', target: 'CSCI221', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI207-CSCI208', source: 'CSCI207', target: 'CSCI208', sourceHandle: 'right-0', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH211-CSCI208', source: 'MATH211', target: 'CSCI208', sourceHandle: 'right-6', targetHandle: 'left-9', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI207-CSCI217', source: 'CSCI207', target: 'CSCI217', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 50, targetOffsetY: 0 } } },
        { id: 'e-CSCI217-CSCI313', source: 'CSCI217', target: 'CSCI313', sourceHandle: 'right-7', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI217-CSCI305', source: 'CSCI217', target: 'CSCI305', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI207-CSCI463', source: 'CSCI207', target: 'CSCI463', sourceHandle: 'right-10', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 50, targetOffsetY: 0 } } },
        { id: 'e-CSCI221-CSCI311', source: 'CSCI221', target: 'CSCI311', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 50, targetOffsetY: 0 } } },
        { id: 'e-CSCI311-CSCI315', source: 'CSCI311', target: 'CSCI315', sourceHandle: 'right-9', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-MATH201-CSCI322', source: 'MATH201', target: 'CSCI322', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI322-CSCI461', source: 'CSCI322', target: 'CSCI461', sourceHandle: 'right-10', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI208-CSCI461', source: 'CSCI208', target: 'CSCI461', sourceHandle: 'right-0', targetHandle: 'left-9', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI322-CSCI467', source: 'CSCI322', target: 'CSCI467', sourceHandle: 'right-0', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI208-CSCI417', source: 'CSCI208', target: 'CSCI417', sourceHandle: 'right-6', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI208-CSCI419', source: 'CSCI208', target: 'CSCI419', sourceHandle: 'right-9', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: -50, targetOffsetY: 0 } } },
        { id: 'e-CSCI311-CSCI415', source: 'CSCI311', target: 'CSCI415', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 30, centerOffset: -100, targetOffsetY: 0 } } },
        { id: 'e-CSCI419-CSCI415', source: 'CSCI419', target: 'CSCI415', sourceHandle: 'right-9', targetHandle: 'left-8', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI417-CSCI462', source: 'CSCI417', target: 'CSCI462', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI208-CSCI464', source: 'CSCI208', target: 'CSCI464', sourceHandle: 'right-3', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI461-CSCI469', source: 'CSCI461', target: 'CSCI469', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI419-CSCI465', source: 'CSCI419', target: 'CSCI465', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 30, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-CSCI495-CSCI496', source: 'CSCI495', target: 'CSCI496', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-ENGL101-ENGL102', source: 'ENGL101', target: 'ENGL102', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-ENGL102-ENGL201', source: 'ENGL102', target: 'ENGL201', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } },
        { id: 'e-ENGL201-ENGL202', source: 'ENGL201', target: 'ENGL202', sourceHandle: 'right-5', targetHandle: 'left-5', type: 'smart', data: { pathOptions: { offset: 20, centerOffset: 0, targetOffsetY: 0 } } }
    ]
};
