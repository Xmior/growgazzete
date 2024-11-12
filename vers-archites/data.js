// En boktan ve zor iş, data girmece
// ilk versiyon sonra platform sonra exist durumu
// if Exist:0, Does not exist | if Exist:1, Does exist | if Exist:2, Exist but lost | diye ayarlı, 3 direk bozuk
// sonra icon <resmin linki>, ekstra info böyle idleri fln sonrada çıkış tarihi, bu biraz karışık, istersen clientteki dosya yaratılışına bak istersen eski bir arşiv websitesinden ne zaman yayınlandığına bak ama !!UYARI!! bazı websiteleri oraya ne zaman o clienti eklerseler o zaman çıkmış gibi giriyorlar ve bu hatalı olabiliyo
// kg bb

const version0Data = [
    
  { version: 'v0.90',
    android: {
    exist: 2,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 0',
    releaseDate: '30 November, 2012'} },
  
  { version: 'v0.91',
    android: {
    exist: 0,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 1',
    releaseDate: 'Unknown' } },
  
  { version: 'v0.92',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 2',
    releaseDate: '1 December, 2012' } },
  
  { version: 'v0.93',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 3',
    releaseDate: '6 December, 2012' } },
  
  { version: 'v0.94',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 4',
    releaseDate: '6 December, 2012' } },
  
  { version: 'v0.95',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 5',
    releaseDate: '9 December, 2012' } },
  
  { version: 'v0.96',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 6',
    releaseDate: '17 December, 2012' } },
  
  { version: 'v0.97',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 7',
    releaseDate: '19 December, 2012' } },
  
  { version: 'v0.98',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 8',
    releaseDate: '26 December, 2012' } },
  
  { version: 'v0.99',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 9',
    releaseDate: '28 December, 2012' } },
  
];

// iOS Versiyonları Listesi ['1.00', '1.05', '1.08', '1.10', '1.12', '1.14', '1.16', '1.18', '1.19', '1.21', '1.22', '1.23', '1.24', '1.25', '1.29', '1.31', '1.36', '1.38', '1.39', '1.40', '1.42', '1.43', '1.44', '1.45', '1.46', '1.47', '1.48', '1.50', '1.51', '1.52', '1.53', '1.54', '1.55', '1.56', '1.62', '1.63', '1.64', '1.65', '1.67', '1.68', '1.70', '1.71', '1.73', '1.77', '1.79', '1.81', '1.83', '1.84', '1.85', '1.86', '1.88', '1.89', '1.92', '1.94', '1.96', '1.97', '2.00', '2.01', '2.01', '2.01', '2.02', '2.02', '2.02', '2.06', '2.06', '2.06', '2.13', '2.13', '2.13', '2.15', '2.20', '2.24', '2.25', '2.26', '2.29', '2.35', '2.37', '2.40', '2.42', '2.44', '2.45', '2.46', '2.47', '2.48', '2.49', '2.50', '2.55', '2.56', '2.58', '2.61', '2.61', '2.62', '2.64', '2.65', '2.66', '2.67', '2.68', '2.69', '2.70', '2.71', '2.73', '2.76', '2.78', '2.79', '2.80', '2.81', '2.82', '2.83', '2.84', '2.85', '2.88', '2.88', '2.89', '2.90', '2.91', '2.92', '2.94', '2.96', '2.96', '2.982', '2.983', '2.984', '2.985', '2.986', '2.987', '2.988', '2.989', '2.990', '2.991', '2.992', '2.993', '2.994', '2.995', '2.996', '2.997', '2.997', '2.998', '2.999', '3.00', '3.01', '3.011', '3.20', '3.20.1', '3.30.2', '3.30.3', '3.35', '3.36', '3.37', '3.38', '3.39', '3.40', '3.42', '3.43', '3.44', '3.45', '3.46', '3.47', '3.48', '3.50', '3.51', '3.52', '3.56', '3.59', '3.60', '3.60', '3.60', '3.61', '3.62', '3.63', '3.65', '3.66', '3.67', '3.68', '3.69', '3.70', '3.71', '3.73', '3.73', '3.74', '3.75', '3.76', '3.77', '3.78', '3.78', '3.79', '3.80', '3.81', '3.82', '3.83', '3.84', '3.85', '3.86', '3.87', '3.89', '3.90', '3.93', '3.94', '3.95', '3.96', '3.98', '3.99', '4.00', '4.01', '4.03', '4.04', '4.06', '4.09', '4.10', '4.11', '4.12', '4.13', '4.14', '4.15', '4.17', '4.18', '4.19', '4.20', '4.23', '4.24', '4.27', '4.29', '4.31', '4.32', '4.33', '4.34', '4.35', '4.36', '4.37', '4.38', '4.39', '4.40', '4.41', '4.42', '4.43', '4.44', '4.45', '4.46', '4.47', '4.48', '4.49', '4.50', '4.51', '4.52', '4.53', '4.54', '4.55', '4.57', '4.58', '4.59', '4.61', '4.61', '4.62', '4.63', '4.64']

const version1Data = [
    
  { version: 'v1.00',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 10',
    releaseDate: '31 December, 2012',
    whatsNew: 'Test.' },
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID: 10',
    releaseDate: '11 January, 2013',
    whatsNew: 'Test.' } },
                      
  { version: 'v1.01',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 11',
    releaseDate: '18 January, 2013' } },
  
  { version: 'v1.02',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 12',
    releaseDate: '19 January, 2013' } },
  
  { version: 'v1.03',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 12',
    releaseDate: '19 January, 2013' } },
  
  { version: 'v1.04',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 14',
    releaseDate: '20 January, 2013' } },
  
  { version: 'v1.05',
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID : 12',
    releaseDate: '20 January, 2013',
    whatsNew: '* Support for new item types<br>- Fixed problem where new users could see a "you are banned" message<br>- Misc bug fixes and improvements' } },
  
  { version: 'v1.06',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 16',
    releaseDate: '23 January, 2013' } },
  
  { version: 'v1.07',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 17',
    releaseDate: '24 January, 2013',
    whatsNew: '* Support for new item types<br>- Fixed problem where new users could see a "you are banned" message<br>- Misc bug fixes and improvements' } },
  
  { version: 'v1.08',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 18',
    releaseDate: '30 January, 2013',
    whatsNew: '* Support for new item types<br>- Fixed problem where new users could see a "you are banned" message<br>- Misc bug fixes and improvements' },
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID: 14',
    releaseDate: '30 January, 2013',
    whatsNew: '* Support for new item types<br>- Fixed problem where new users could see a "you are banned" message<br>- Misc bug fixes and improvements' } },
  
  { version: 'v1.09',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 19',
    releaseDate: '6 February, 2013',
    whatsNew: ' Support for new kinds of items<br>Misc bug fixes and improvements' } },
  
  { version: 'v1.10',
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID : 16',
    releaseDate: '7 February, 2013'} },
  
  { version: 'v1.11',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 21',
    releaseDate: '15 February, 2013'} },
  
  { version: 'v1.12',
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID : 18',
    releaseDate: '27 February, 2013'} },
  
  { version: 'v1.13',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 23',
    releaseDate: '1 March, 2013'} },
  
  { version: 'v1.14',
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID : 19',
    releaseDate: '6 March, 2013'} },
  
  { version: 'v1.15',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 25',
    releaseDate: '9 March, 2013'} },
  
  { version: 'v1.16',
  android: {
  exist: 1,
  icon: 'images/a.png',
  extraInfo: 'Version Code: 26',
  releaseDate: '27 March, 2013',
  whatsNew: '* New "Remember Zoom Through Doors" option added<br>Improved controls a bit<br>Trade system works better<br>Misc bug fixes and improvements' },
  ios: {
  exist: 1,
  icon: 'images/a.png',
  extraInfo: 'iOS ID: 21',
  releaseDate: '25 March, 2013',
  whatsNew: '* New "Remember Zoom Through Doors" option added<br>Improved controls a bit<br>Trade system works better<br>Misc bug fixes and improvements' } },
  
  { version: 'v1.17',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 27',
    releaseDate: '21 April, 2013'} },
  
  { version: 'v1.18',
  android: {
  exist: 1,
  icon: 'images/a.png',
  extraInfo: 'Version Code: 28',
  releaseDate: '22 April, 2013',
  whatsNew: '* Added support for the new V2 server, this client can now be used to beta test.. check the Growtopia forums for more information.' },
  ios: {
  exist: 1,
  icon: 'images/a.png',
  extraInfo: 'iOS ID: 23',
  releaseDate: '22 April, 2013'} },
  
  {
      version: 'v1.19',
      ios: {
        exist: 1,
        icon: 'images/a.png',
        extraInfo: 'iOS ID: 24',
        releaseDate: '28 April 2013',
        whatsNew: ''
      }
    },
  {
     version: 'v1.20',
     android: {
       exist: 1,
       icon: 'images/a.png',
       extraInfo: 'Version Code: 30',
       releaseDate: '2 May 2013',
       whatsNew: 'Added support for new item types, this update will soon be required to play<br>Misc bug fixes and improvements'
     }
   },
  {
     version: 'v1.21',
     ios: {
       exist: 1,
       icon: 'images/a.png',
       extraInfo: 'iOS ID: 27',
       releaseDate: '12 May 2013',
       whatsNew: 'Added support for new item types, this update will soon be required to play<br>Misc bug fixes and improvements'
     }
   },
  {
     version: 'v1.22',
     android: {
       exist: 1,
       icon: 'images/a.png',
       extraInfo: 'Version Code: 32',
       releaseDate: '16 May 2013',
       whatsNew: 'Added support for new item types, this update will soon be required to play<br>Misc bug fixes and improvements'
     },
     ios: {
       exist: 1,
       icon: 'images/a.png',
       extraInfo: 'iOS ID: 28',
       releaseDate: '20 May 2013',
       whatsNew: 'Added support for new item types, this update will soon be required to play<br>Misc bug fixes and improvements'
     }
   },
  {
      version: 'v1.23',
      ios: {
        exist: 1,
        icon: 'images/a.png',
        extraInfo: 'iOS ID: 29',
        releaseDate: '27 May 2013',
        whatsNew: ''
      }
    },
  {
      version: 'v1.24',
      android: {
        exist: 1,
        icon: 'images/a.png',
        extraInfo: 'Version Code: 33',
        releaseDate: '4 June 2013',
        whatsNew: '* Misc bug fixes and improvements'
      },
      ios: {
        exist: 1,
        icon: 'images/a.png',
        extraInfo: 'iOS ID: 30',
        releaseDate: '4 June 2013'
      }
    },
  {
     version: 'v1.25',
     ios: {
       exist: 1,
       icon: 'images/a.png',
       extraInfo: 'iOS ID: 31',
       releaseDate: '16 June 2013',
       whatsNew: ''
     }
   },
  {
      version: 'v1.26',
      android: {
        exist: 1,
        icon: 'images/a.png',
        extraInfo: 'Version Code: 34',
        releaseDate: '20 June 2013',
        whatsNew: ''
      }
    },
  {
      version: 'v1.27',
      android: {
        exist: 1,
        icon: 'images/a.png',
        extraInfo: 'Version Code: 35',
        releaseDate: '28 June 2013',
        whatsNew: ''
      },
      macos: {
        exist: 2,
        icon: 'images/a.png',
        extraInfo: 'Bundle ID: 1',
        releaseDate: '27 June 2013',
        whatsNew: ''
      }
    },
  
];

const version2Data = [
    
  { version: 'Test',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Testo',
    releaseDate: '31 December, 2012',
    whatsNew: 'Test.' },
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID: test',
    releaseDate: '11 January, 2013',
    whatsNew: 'Test.' } },
  
];

const version3Data = [
    
  { version: 'v3.00',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'App ID: 214',
    releaseDate: '31 December, 2019',
    whatsNew: 'Hello Growtopians,<br><br>Whats the best way to kickstart 2020? With an awesome set of updates, of course! Read on for all the cool stuff well be adding in January:<br><br>- The all-new Store Wars update adds new vending machines! Wield the power of thousands of generations of trades and may the best price be with you, always!<br>- Growtopia turns SEVEN! Come celebrate this historic event during our annual Anniversary Week! (Coming Soon)<br>- Januarys IOTM and Subscriber Item!<br>- The Growtopia Team' },
    ios: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'iOS ID: 214',
    releaseDate: '31 December, 2019',
    whatsNew: 'Hello Growtopians,<br><br>Whats the best way to kickstart 2020? With an awesome set of updates, of course! Read on for all the cool stuff well be adding in January:<br><br>- The all-new Store Wars update adds new vending machines! Wield the power of thousands of generations of trades and may the best price be with you, always!<br>- Growtopia turns SEVEN! Come celebrate this historic event during our annual Anniversary Week! (Coming Soon)<br>- Januarys IOTM and Subscriber Item!<br>- The Growtopia Team' } },
  
];

const version4Data = [
    
  { version: 'v4.70',
    android: {
    exist: 1,
    icon: 'images/Growtopia-Harvestfest1.webp',
    extraInfo: 'App ID : 361',
    releaseDate: '23 October, 2024',
    whatsNew: 'Hello Growtopians,<br><br>Did someone say jam-packed?!? Thats exactly what Growtopia has to offer for you!<br>- The Royal Grow Pass and Subscriber Item!<br>- The ever returning Voucher Dayz!<br>- Experience the new catalogue of Wonders crafted from the finest material!<br>- Spooky Scares, Tasty Treats & Frightening Fridays! Halloween Returns!<br>- Bug fixes & optimizations.<br><br>Stay safe and play loads fellow Growtopians!<br><br>- The Growtopia Team' },
    ios: {
    exist: 1,
    icon: 'images/Growtopia-Harvestfest1.webp',
    extraInfo: 'iOS ID: 369',
    releaseDate: '23 October, 2024',
    whatsNew: 'Hello Growtopians,<br><br>Did someone say jam-packed?!? Thats exactly what Growtopia has to offer for you!<br>- The Royal Grow Pass and Subscriber Item!<br>- The ever returning Voucher Dayz!<br>- Experience the new catalogue of Wonders crafted from the finest material!<br>- Spooky Scares, Tasty Treats & Frightening Fridays! Halloween Returns!<br>- Bug fixes & optimizations.<br><br>Stay safe and play loads fellow Growtopians!<br><br>- The Growtopia Team' },
  windows: {
  exist: 1,
  icon: 'images/a.png',
  extraInfo: 'Hello?',
  releaseDate: '23 October, 2024'},
  macos: {
  exist: 1,
  icon: 'images/Growtopia_Summer1.webp',
  extraInfo: 'App ID: 342',
  releaseDate: '23 October, 2024'},
  ubisoft: {
  exist: 2,
  icon: 'https://static.wikia.nocookie.net/growtopia-iceberg/images/2/2d/Growtopia_New_App_Icon_Shadowless.png/revision/latest?cb=20240115132550',
  extraInfo: 'Hello?',
  releaseDate: '23 October, 2024'},
  steam: {
  exist: 2,
  icon: 'https://static.wikia.nocookie.net/growtopia-iceberg/images/2/2d/Growtopia_New_App_Icon_Shadowless.png/revision/latest?cb=20240115132550',
  extraInfo: 'Manifest ID: 4595387357141840613',
  releaseDate: '23 October, 2024',
  whatsNew: 'Hello Growtopians,<br><br>Did someone say jam-packed?!? Thats exactly what Growtopia has to offer for you!<br>- The Royal Grow Pass and Subscriber Item!<br>- The ever returning Voucher Dayz!<br>- Experience the new catalogue of Wonders crafted from the finest material!<br>- Spooky Scares, Tasty Treats & Frightening Fridays! Halloween Returns!<br>- Bug fixes & optimizations.<br><br>Stay safe and play loads fellow Growtopians!<br><br>- The Growtopia Team' } },
  
];

const version12Data = [
    
    { version: 'Buildo With Cheese',
      windows: {
      exist: 2,
      icon: 'images/unk.png',
      extraInfo: 'Old client from, "Two guys made an MMO: The Growtopia Postmortem" blog.',
      releaseDate: '15 September, 2012' } },
    
    { version: 'Buildo With Cheese',
      windows: {
      exist: 2,
      icon: 'images/unk.png',
      extraInfo: 'Old client from, "Hamumu! Develog!!! #8" footage.',
      releaseDate: '12 October, 2012' } },
    
  { version: 'Buildo With Cheese',
    windows: {
    exist: 2,
    icon: 'images/unk.png',
    extraInfo: 'Old client from, "Two guys made an MMO: The Growtopia Postmortem" blog.',
    releaseDate: '18 October, 2012' } },
                      
  { version: 'Growtopia',
    windows: {
    exist: 2,
    icon: 'images/unk.png',
    extraInfo: 'Old client from, "Hamumu! Develog!!! #9" footage.',
    releaseDate: '23 October, 2012' } },
  
  { version: 'ADMIN v1.41',
    windows: {
    exist: 2,
    icon: 'images/unk.png',
    extraInfo: '',
    releaseDate: 'September 7, 2013' } },
  
  { version: 'ADMIN v2.55',
    windows: {
    exist: 2,
    icon: 'images/unk.png',
    extraInfo: 'From 2017 Data branch leak.',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 0',
    releaseDate: 'April 19, 2020' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 1',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 2',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 3',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 4',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 5',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta (com.ubisoft.growtopia.test)',
    android: {
    exist: 0,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 6',
    releaseDate: 'Unknown' } },
  
  { version: 'Growtopia Beta v1.5 (v.2020.05.27)',
    android: {
    exist: 1,
    icon: 'images/Growtopia_Beta.webp',
    extraInfo: 'Version Code: 7',
    releaseDate: 'May 27, 2020' } },
  
];
