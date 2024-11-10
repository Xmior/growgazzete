// En boktan ve zor iş, data girmece
// ilk versiyon sonra platform sonra exist durumu
// if Exist:0, Does not exist | if Exist:1, Does exist | if Exist:2, Exist but lost | diye ayarlı, 3 direk bozuk
// sonra icon <resmin linki>, ekstra info böyle idleri fln sonrada çıkış tarihi, bu biraz karışık, istersen clientteki dosya yaratılışına bak istersen eski bir arşiv websitesinden ne zaman yayınlandığına bak ama !!UYARI!! bazı websiteleri oraya ne zaman o clienti eklerseler o zaman çıkmış gibi giriyorlar ve bu hatalı olabiliyo
// kg bb

const version0Data = [
    
  { version: 'v0.90',
    android: {
    exist: 0,
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
  
  { version: 'v1.07',
    android: {
    exist: 1,
    icon: 'images/a.png',
    extraInfo: 'Version Code: 17',
    releaseDate: '24 January, 2013',
    whatsNew: '* Support for new item types<br>- Fixed problem where new users could see a "you are banned" message<br>- Misc bug fixes and improvements' } },
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
