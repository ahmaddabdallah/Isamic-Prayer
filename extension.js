const vscode = require('vscode');
const axios = require('axios');
const moment = require('moment');

const hadiths = [
  {
    text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى',
    reference: 'صحيح البخاري',
  },
  {
    text: 'من حسن إسلام المرء تركه ما لا يعنيه',
    reference: 'سنن الترمذي',
  },
  {
    text: 'الدين النصيحة',
    reference: 'صحيح مسلم',
  },
  {
    text: 'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه',
    reference: 'صحيح البخاري',
  },
  {
    text: 'من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت',
    reference: 'صحيح البخاري',
  },
  {
    text: 'اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن',
    reference: 'سنن الترمذي',
  },
  {
    text: 'المسلم من سلم المسلمون من لسانه ويده',
    reference: 'صحيح البخاري',
  },
  {
    text: 'لا تغضب',
    reference: 'صحيح البخاري',
  },
  {
    text: 'إن الله طيب لا يقبل إلا طيبا',
    reference: 'صحيح مسلم',
  },
  {
    text: 'الطهور شطر الإيمان',
    reference: 'صحيح مسلم',
  },
  {
    text: 'من صام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه',
    reference: 'صحيح البخاري',
  },
  {
    text: 'من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه',
    reference: 'صحيح البخاري',
  },
  {
    text: 'خيركم من تعلم القرآن وعلمه',
    reference: 'صحيح البخاري',
  },
  {
    text: 'الحلال بين والحرام بين وبينهما أمور مشتبهات',
    reference: 'صحيح البخاري',
  },
  {
    text: 'من حفظ على أمتي أربعين حديثاً من أمر دينها بعثه الله يوم القيامة في زمرة الفقهاء والعلماء',
    reference: 'سنن الترمذي',
  },
  {
    text: 'كل معروف صدقة',
    reference: 'صحيح البخاري',
  },
  {
    text: 'من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة',
    reference: 'صحيح مسلم',
  },
  {
    text: 'إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم',
    reference: 'صحيح مسلم',
  },
  {
    text: 'الكلمة الطيبة صدقة',
    reference: 'صحيح البخاري',
  },
  {
    text: 'من غشنا فليس منا',
    reference: 'صحيح مسلم',
  },
];

const adhkar = [
  // Morning Adhkar
  {
    text: 'سبحان الله وبحمده',
    reference: 'أذكار الصباح',
  },
  {
    text: 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير',
    reference: 'أذكار الصباح',
  },
  {
    text: 'اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك المصير',
    reference: 'أذكار الصباح',
  },
  {
    text: 'أعوذ بكلمات الله التامات من شر ما خلق',
    reference: 'أذكار الصباح',
  },
  {
    text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم',
    reference: 'أذكار الصباح',
  },
  {
    text: 'رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً',
    reference: 'أذكار الصباح',
  },
  {
    text: 'يا حي يا قيوم، برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين',
    reference: 'أذكار الصباح',
  },
  // Evening Adhkar
  {
    text: 'أعوذ بكلمات الله التامات من شر ما خلق',
    reference: 'أذكار المساء',
  },
  {
    text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم',
    reference: 'أذكار المساء',
  },
  {
    text: 'رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً',
    reference: 'أذكار المساء',
  },
  {
    text: 'اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير',
    reference: 'أذكار المساء',
  },
  {
    text: 'اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال',
    reference: 'أذكار المساء',
  },
  // General Adhkar
  {
    text: 'سبحان الله العظيم',
    reference: 'أذكار عامة',
  },
  {
    text: 'الحمد لله رب العالمين',
    reference: 'أذكار عامة',
  },
  {
    text: 'لا حول ولا قوة إلا بالله',
    reference: 'أذكار عامة',
  },
  {
    text: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد',
    reference: 'أذكار عامة',
  },
  {
    text: 'سبحان الله والحمد لله ولا إله إلا الله والله أكبر',
    reference: 'أذكار عامة',
  },
  {
    text: 'أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه',
    reference: 'أذكار عامة',
  },
  {
    text: 'اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي',
    reference: 'أذكار عامة',
  },
  {
    text: 'اللهم إني أعوذ بك من عذاب القبر، وأعوذ بك من عذاب النار، وأعوذ بك من فتنة المحيا والممات، وأعوذ بك من فتنة المسيح الدجال',
    reference: 'أذكار عامة',
  },
];

class IslamicReminderManager {
  constructor() {
    this.timers = new Map();
    this.isActive = false;
  }

  async start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.scheduleHadith();
    this.scheduleDhikr();
    this.scheduleQuran();
    this.schedulePrayerTimes();
  }

  stop() {
    this.isActive = false;
    for (const timer of this.timers.values()) {
      clearTimeout(timer);
    }
    this.timers.clear();
  }

  getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async scheduleHadith() {
    if (!this.isActive) return;

    const config = vscode.workspace.getConfiguration('islamicPrayerReminders');
    const interval = config.get('hadithInterval');
    const delay = this.getRandomInterval(interval.min, interval.max);

    const timer = setTimeout(async () => {
      const hadith = hadiths[Math.floor(Math.random() * hadiths.length)];
      vscode.window.showInformationMessage(
        `حديث شريف:\n${hadith.text}\n\nالمرجع: ${hadith.reference}`,
        { modal: true }
      );
      this.scheduleHadith();
    }, delay);

    this.timers.set('hadith', timer);
  }

  async scheduleDhikr() {
    if (!this.isActive) return;

    const config = vscode.workspace.getConfiguration('islamicPrayerReminders');
    const interval = config.get('dhikrInterval');
    const delay = this.getRandomInterval(interval.min, interval.max);

    const timer = setTimeout(async () => {
      const dhikr = adhkar[Math.floor(Math.random() * adhkar.length)];
      vscode.window.showInformationMessage(
        `ذكر:\n${dhikr.text}\n\nالمرجع: ${dhikr.reference}`,
        { modal: true }
      );
      this.scheduleDhikr();
    }, delay);

    this.timers.set('dhikr', timer);
  }

  async scheduleQuran() {
    if (!this.isActive) return;

    const config = vscode.workspace.getConfiguration('islamicPrayerReminders');
    const interval = config.get('quranInterval');
    const delay = this.getRandomInterval(interval.min, interval.max);

    const timer = setTimeout(async () => {
      try {
        const response = await axios.get(
          'https://api.alquran.cloud/v1/ayah/random'
        );
        const verse = response.data.data;
        vscode.window.showInformationMessage(
          `آية قرآنية:\n${verse.text}\n\nالسورة: ${verse.surah.name}\nالآية: ${verse.numberInSurah}`,
          { modal: true }
        );
      } catch (error) {
        console.error('Error fetching Quranic verse:', error);
      }
      this.scheduleQuran();
    }, delay);

    this.timers.set('quran', timer);
  }

  async schedulePrayerTimes() {
    if (!this.isActive) return;

    try {
      const response = await axios.get(
        'https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt'
      );
      const timings = response.data.data.timings;
      const config = vscode.workspace.getConfiguration(
        'islamicPrayerReminders'
      );
      const notificationMinutes = config.get('prayerNotificationTime');

      for (const [prayer, time] of Object.entries(timings)) {
        if (['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(prayer)) {
          const prayerTime = moment(time, 'HH:mm');
          const notificationTime = prayerTime
            .clone()
            .subtract(notificationMinutes, 'minutes');
          const now = moment();

          if (notificationTime.isAfter(now)) {
            const delay = notificationTime.diff(now);
            const timer = setTimeout(() => {
              vscode.window.showInformationMessage(
                `حان وقت صلاة ${prayer} بعد ${notificationMinutes} دقيقة`,
                { modal: true }
              );
            }, delay);
            this.timers.set(`prayer_${prayer}`, timer);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }

    // Reschedule after 24 hours
    setTimeout(() => this.schedulePrayerTimes(), 24 * 60 * 60 * 1000);
  }
}

let reminderManager;

function activate(context) {
  reminderManager = new IslamicReminderManager();

  let startCommand = vscode.commands.registerCommand(
    'islamic-prayer-reminders.start',
    () => {
      reminderManager.start();
      vscode.window.showInformationMessage('Islamic Reminders started');
    }
  );

  let stopCommand = vscode.commands.registerCommand(
    'islamic-prayer-reminders.stop',
    () => {
      reminderManager.stop();
      vscode.window.showInformationMessage('Islamic Reminders stopped');
    }
  );

  let configureCommand = vscode.commands.registerCommand(
    'islamic-prayer-reminders.configure',
    () => {
      vscode.commands.executeCommand(
        'workbench.action.openSettings',
        'islamicPrayerReminders'
      );
    }
  );

  context.subscriptions.push(startCommand, stopCommand, configureCommand);
}

function deactivate() {
  if (reminderManager) {
    reminderManager.stop();
  }
}

module.exports = {
  activate,
  deactivate,
};
