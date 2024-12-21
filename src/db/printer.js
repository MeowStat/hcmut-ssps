const printerData = [
    {
        id: "H1-1",
        name: "H1-1",
        status: "Active",
        type: "HP LaserJet Pro",
        location: {
            building: "H1",
            floor: 1
        },
        paperTrayStatus: {
            remainingPages: 200,
            paperSize: "A4"
        },
        errorAlerts: null,
        description: "First floor printer",
        network: {
            ipv4Address: "192.168.1.201",
            connectionSpeed: "54 Mbps"
        }
    },
    {
        id: "H1-2",
        name: "H1-2",
        status: "Active",
        type: "HP LaserJet Pro",
        location: {
            building: "H1",
            floor: 2
        },
        paperTrayStatus: {
            remainingPages: 150,
            paperSize: "A4"
        },
        errorAlerts: "Low toner",
        description: "Second floor printer",
        network: {
            ipv4Address: "192.168.1.202",
            connectionSpeed: "54 Mbps"
        }
    },
    {
        id: "H1-3",
        name: "H1-3",
        status: "Active",
        type: "HP LaserJet Pro",
        location: {
            building: "H1",
            floor: 3
        },
        paperTrayStatus: {
            remainingPages: 150,
            paperSize: "A4"
        },
        errorAlerts: "Low toner",
        description: "Third floor printer",
        network: {
            ipv4Address: "192.168.1.202",
            connectionSpeed: "54 Mbps"
        }
    },
    {
        id: "H2-1",
        name: "H2-1",
        status: "Offline",
        type: "HP LaserJet Pro",
        location: {
            building: "H2",
            floor: 1
        },
        paperTrayStatus: {
            remainingPages: 0,
            paperSize: "A4"
        },
        errorAlerts: "Out of paper",
        description: "First floor printer",
        network: {
            ipv4Address: "192.168.1.203",
            connectionSpeed: "54 Mbps"
        }
    },
    {
        id: "H3-1",
        name: "H3-1",
        status: "Active",
        type: "Brother DCP-L2540DW",
        location: {
            building: "H3",
            floor: 1
        },
        paperTrayStatus: {
            remainingPages: 190,
            paperSize: "Letter"
        },
        errorAlerts: null,
        description: "Reception printer",
        network: {
            ipv4Address: "192.168.1.104",
            connectionSpeed: "60 Mbps"
        }
    },
    {
        id: "H3-2",
        name: "H3-2",
        status: "Offline",
        type: "Epson WorkForce WF-2830",
        location: {
            building: "H3",
            floor: 2
        },
        paperTrayStatus: {
            remainingPages: 0,
            paperSize: "A4"
        },
        errorAlerts: "Out of paper",
        description: "Second floor admin printer",
        network: {
            ipv4Address: "192.168.1.107",
            connectionSpeed: "30 Mbps"
        }
    },
    {
        id: "H3-3",
        name: "H3-3",
        status: "Offline",
        type: "Canon imageCLASS MF232w",
        location: {
            building: "H3",
            floor: 3
        },
        paperTrayStatus: {
            remainingPages: 5,
            paperSize: "A4"
        },
        errorAlerts: "Low paper",
        description: "Third floor breakout area printer",
        network: {
            ipv4Address: "192.168.1.110",
            connectionSpeed: "35 Mbps"
        }
    },
    {
        id: "H3-4",
        name: "H3-4",
        status: "Active",
        type: "HP OfficeJet Pro 8025e",
        location: {
            building: "H3",
            floor: 4
        },
        paperTrayStatus: {
            remainingPages: 200,
            paperSize: "Letter"
        },
        errorAlerts: null,
        description: "Fourth floor printer",
        network: {
            ipv4Address: "192.168.1.112",
            connectionSpeed: "75 Mbps"
        }
    },
    {
        id: "H3-5",
        name: "H3-5",
        status: "Active",
        type: "Canon Pixma G2020",
        location: {
            building: "H3",
            floor: 5
        },
        paperTrayStatus: {
            remainingPages: 150,
            paperSize: "A4"
        },
        errorAlerts: null,
        description: "H3 printer",
        network: {
            ipv4Address: "192.168.1.115",
            connectionSpeed: "100 Mbps"
        }
    },
    {
        id: "H6-1",
        name: "H6-1",
        status: "Active",
        type: "HP LaserJet Pro P1102",
        location: {
            building: "H6",
            floor: 1
        },
        paperTrayStatus: {
            remainingPages: 200,
            paperSize: "A4"
        },
        errorAlerts: null,
        description: "Main hallway printer",
        network: {
            ipv4Address: "192.168.1.101",
            connectionSpeed: "54 Mbps"
        }
    },
    {
        id: "H6-2",
        name: "H6-2",
        status: "Active",
        type: "Canon Pixma G2020",
        location: {
            building: "H6",
            floor: 2
        },
        paperTrayStatus: {
            remainingPages: 180,
            paperSize: "A4"
        },
        errorAlerts: null,
        description: "Second floor printer",
        network: {
            ipv4Address: "192.168.1.102",
            connectionSpeed: "100 Mbps"
        }
    },
    {
        id: "H6-3",
        name: "H6-3",
        status: "Offline",
        type: "Epson EcoTank L3210",
        location: {
            building: "H6",
            floor: 3
        },
        paperTrayStatus: {
            remainingPages: 10,
            paperSize: "A4"
        },
        errorAlerts: "Paper jam",
        description: "Printer near conference room",
        network: {
            ipv4Address: "192.168.1.103",
            connectionSpeed: "45 Mbps"
        }
    },
    {
        id: "H6-4",
        name: "H6-4",
        status: "Active",
        type: "HP LaserJet Pro M404dn",
        location: {
            building: "H6",
            floor: 4
        },
        paperTrayStatus: {
            remainingPages: 150,
            paperSize: "A4"
        },
        errorAlerts: null,
        description: "Fourth floor shared printer",
        network: {
            ipv4Address: "192.168.1.105",
            connectionSpeed: "80 Mbps"
        }
    },
    {
        id: "H6-5",
        name: "H6-5",
        status: "Active",
        type: "Ricoh SP 210",
        location: {
            building: "H6",
            floor: 5
        },
        paperTrayStatus: {
            remainingPages: 170,
            paperSize: "Legal"
        },
        errorAlerts: null,
        description: "Fifth floor IT room printer",
        network: {
            ipv4Address: "192.168.1.106",
            connectionSpeed: "50 Mbps"
        }
    },
    {
        id: "H6-6",
        name: "H6-6",
        status: "Active",
        type: "HP DeskJet 2331",
        location: {
            building: "H6",
            floor: 6
        },
        paperTrayStatus: {
            remainingPages: 50,
            paperSize: "A5"
        },
        errorAlerts: null,
        description: "Sixth floor team printer",
        network: {
            ipv4Address: "192.168.1.108",
            connectionSpeed: "40 Mbps"
        }
    },
    {
        id: "H6-7",
        name: "H6-7",
        status: "Active",
        type: "Epson EcoTank L3150",
        location: {
            building: "H6",
            floor: 7
        },
        paperTrayStatus: {
            remainingPages: 120,
            paperSize: "A4"
        },
        errorAlerts: null,
        description: "Seventh floor meeting room printer",
        network: {
            ipv4Address: "192.168.1.109",
            connectionSpeed: "65 Mbps"
        }
    }
];

  
export default printerData;

  