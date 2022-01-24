/**
 * Generic Game Constants
 *
 * Constants for specific mechanics or features will NOT be here.
 */
export const CONSTANTS: {
  VersionString: string;
  VersionNumber: number;
  _idleSpeed: number;
  MaxSkillLevel: number;
  MilliPerCycle: number;
  CorpFactionRepRequirement: number;
  BaseFocusBonus: number;
  BaseCostFor1GBOfRamHome: number;
  BaseCostFor1GBOfRamServer: number;
  TravelCost: number;
  BaseFavorToDonate: number;
  DonateMoneyToRepDivisor: number;
  FactionReputationToFavorBase: number;
  FactionReputationToFavorMult: number;
  CompanyReputationToFavorBase: number;
  CompanyReputationToFavorMult: number;
  NeuroFluxGovernorLevelMult: number;
  NumNetscriptPorts: number;
  HomeComputerMaxRam: number;
  ServerBaseGrowthRate: number;
  ServerMaxGrowthRate: number;
  ServerFortifyAmount: number;
  ServerWeakenAmount: number;
  PurchasedServerLimit: number;
  PurchasedServerMaxRam: number;
  MultipleAugMultiplier: number;
  TorRouterCost: number;
  WSEAccountCost: number;
  TIXAPICost: number;
  MarketData4SCost: number;
  MarketDataTixApi4SCost: number;
  StockMarketCommission: number;
  HospitalCostPerHp: number;
  IntelligenceCrimeWeight: number;
  IntelligenceInfiltrationWeight: number;
  IntelligenceCrimeBaseExpGain: number;
  IntelligenceProgramBaseExpGain: number;
  IntelligenceTerminalHackBaseExpGain: number;
  IntelligenceSingFnBaseExpGain: number;
  IntelligenceClassBaseExpGain: number;
  MillisecondsPer20Hours: number;
  GameCyclesPer20Hours: number;
  MillisecondsPer10Hours: number;
  GameCyclesPer10Hours: number;
  MillisecondsPer8Hours: number;
  GameCyclesPer8Hours: number;
  MillisecondsPer4Hours: number;
  GameCyclesPer4Hours: number;
  MillisecondsPer2Hours: number;
  GameCyclesPer2Hours: number;
  MillisecondsPerHour: number;
  GameCyclesPerHour: number;
  MillisecondsPerHalfHour: number;
  GameCyclesPerHalfHour: number;
  MillisecondsPerQuarterHour: number;
  GameCyclesPerQuarterHour: number;
  MillisecondsPerFiveMinutes: number;
  GameCyclesPerFiveMinutes: number;
  FactionWorkHacking: string;
  FactionWorkField: string;
  FactionWorkSecurity: string;
  WorkTypeCompany: string;
  WorkTypeCompanyPartTime: string;
  WorkTypeFaction: string;
  WorkTypeCreateProgram: string;
  WorkTypeStudyClass: string;
  WorkTypeCrime: string;
  ClassStudyComputerScience: string;
  ClassDataStructures: string;
  ClassNetworks: string;
  ClassAlgorithms: string;
  ClassManagement: string;
  ClassLeadership: string;
  ClassGymStrength: string;
  ClassGymDefense: string;
  ClassGymDexterity: string;
  ClassGymAgility: string;
  ClassDataStructuresBaseCost: number;
  ClassNetworksBaseCost: number;
  ClassAlgorithmsBaseCost: number;
  ClassManagementBaseCost: number;
  ClassLeadershipBaseCost: number;
  ClassGymBaseCost: number;
  ClassStudyComputerScienceBaseExp: number;
  ClassDataStructuresBaseExp: number;
  ClassNetworksBaseExp: number;
  ClassAlgorithmsBaseExp: number;
  ClassManagementBaseExp: number;
  ClassLeadershipBaseExp: number;
  CrimeShoplift: string;
  CrimeRobStore: string;
  CrimeMug: string;
  CrimeLarceny: string;
  CrimeDrugs: string;
  CrimeBondForgery: string;
  CrimeTraffickArms: string;
  CrimeHomicide: string;
  CrimeGrandTheftAuto: string;
  CrimeKidnap: string;
  CrimeAssassination: string;
  CrimeHeist: string;
  CodingContractBaseFactionRepGain: number;
  CodingContractBaseCompanyRepGain: number;
  CodingContractBaseMoneyGain: number;
  TotalNumBitNodes: number;
  LatestUpdate: string;
} = {
  VersionString: "3.0.0",
  VersionNumber: 33,

  // Speed (in ms) at which the main loop is updated
  _idleSpeed: 200,

  /** Max level for any skill, assuming no multipliers. Determined by max numerical value in javascript for experience
   * and the skill level formula in Player.js. Note that all this means it that when experience hits MAX_INT, then
   * the player will have this level assuming no multipliers. Multipliers can cause skills to go above this.
   */
  MaxSkillLevel: 975,

  // Milliseconds per game cycle
  MilliPerCycle: 200,

  // How much reputation is needed to join a megacorporation's faction
  CorpFactionRepRequirement: 200e3,

  // Base RAM costs
  BaseCostFor1GBOfRamHome: 32000,
  BaseCostFor1GBOfRamServer: 55000, //1 GB of RAM

  // Cost to travel to another city
  TravelCost: 200e3,

  // Faction and Company favor-related things
  BaseFavorToDonate: 150,
  DonateMoneyToRepDivisor: 1e6,
  FactionReputationToFavorBase: 500,
  FactionReputationToFavorMult: 1.02,
  CompanyReputationToFavorBase: 500,
  CompanyReputationToFavorMult: 1.02,

  // NeuroFlux Governor Augmentation cost multiplier
  NeuroFluxGovernorLevelMult: 1.14,

  NumNetscriptPorts: 20,

  // Server-related constants
  HomeComputerMaxRam: 1073741824, // 2 ^ 30
  ServerBaseGrowthRate: 1.03, // Unadjusted Growth rate
  ServerMaxGrowthRate: 1.0035, // Maximum possible growth rate (max rate accounting for server security)
  ServerFortifyAmount: 0.002, // Amount by which server's security increases when its hacked/grown
  ServerWeakenAmount: 0.05, // Amount by which server's security decreases when weakened

  PurchasedServerLimit: 25,
  PurchasedServerMaxRam: 1048576, // 2^20

  // Augmentation Constants
  MultipleAugMultiplier: 1.9,

  // TOR Router
  TorRouterCost: 200e3,

  // Stock market
  WSEAccountCost: 200e6,
  TIXAPICost: 5e9,
  MarketData4SCost: 1e9,
  MarketDataTixApi4SCost: 25e9,
  StockMarketCommission: 100e3,

  // Hospital/Health
  HospitalCostPerHp: 100e3,

  // Intelligence-related constants
  IntelligenceCrimeWeight: 0.025, // Weight for how much int affects crime success rates
  IntelligenceInfiltrationWeight: 0.1, // Weight for how much int affects infiltration success rates
  IntelligenceCrimeBaseExpGain: 0.05,
  IntelligenceProgramBaseExpGain: 0.1, // Program required hack level divided by this to determine int exp gain
  IntelligenceTerminalHackBaseExpGain: 200, // Hacking exp divided by this to determine int exp gain
  IntelligenceSingFnBaseExpGain: 1.5,
  IntelligenceClassBaseExpGain: 0.01,

  // Time-related constants
  MillisecondsPer20Hours: 72000000,
  GameCyclesPer20Hours: 72000000 / 200,

  MillisecondsPer10Hours: 36000000,
  GameCyclesPer10Hours: 36000000 / 200,

  MillisecondsPer8Hours: 28800000,
  GameCyclesPer8Hours: 28800000 / 200,

  MillisecondsPer4Hours: 14400000,
  GameCyclesPer4Hours: 14400000 / 200,

  MillisecondsPer2Hours: 7200000,
  GameCyclesPer2Hours: 7200000 / 200,

  MillisecondsPerHour: 3600000,
  GameCyclesPerHour: 3600000 / 200,

  MillisecondsPerHalfHour: 1800000,
  GameCyclesPerHalfHour: 1800000 / 200,

  MillisecondsPerQuarterHour: 900000,
  GameCyclesPerQuarterHour: 900000 / 200,

  MillisecondsPerFiveMinutes: 300000,
  GameCyclesPerFiveMinutes: 300000 / 200,

  // Player Work & Action
  BaseFocusBonus: 0.8,
  FactionWorkHacking: "Faction Hacking Work",
  FactionWorkField: "Faction Field Work",
  FactionWorkSecurity: "Faction Security Work",

  WorkTypeCompany: "Working for Company",
  WorkTypeCompanyPartTime: "Working for Company part-time",
  WorkTypeFaction: "Working for Faction",
  WorkTypeCreateProgram: "Working on Create a Program",
  WorkTypeStudyClass: "Studying or Taking a class at university",
  WorkTypeCrime: "Committing a crime",

  ClassStudyComputerScience: "studying Computer Science",
  ClassDataStructures: "taking a Data Structures course",
  ClassNetworks: "taking a Networks course",
  ClassAlgorithms: "taking an Algorithms course",
  ClassManagement: "taking a Management course",
  ClassLeadership: "taking a Leadership course",
  ClassGymStrength: "training your strength at a gym",
  ClassGymDefense: "training your defense at a gym",
  ClassGymDexterity: "training your dexterity at a gym",
  ClassGymAgility: "training your agility at a gym",

  ClassDataStructuresBaseCost: 40,
  ClassNetworksBaseCost: 80,
  ClassAlgorithmsBaseCost: 320,
  ClassManagementBaseCost: 160,
  ClassLeadershipBaseCost: 320,
  ClassGymBaseCost: 120,

  ClassStudyComputerScienceBaseExp: 0.5,
  ClassDataStructuresBaseExp: 1,
  ClassNetworksBaseExp: 2,
  ClassAlgorithmsBaseExp: 4,
  ClassManagementBaseExp: 2,
  ClassLeadershipBaseExp: 4,

  CrimeShoplift: "shoplift",
  CrimeRobStore: "rob a store",
  CrimeMug: "mug someone",
  CrimeLarceny: "commit larceny",
  CrimeDrugs: "deal drugs",
  CrimeBondForgery: "forge corporate bonds",
  CrimeTraffickArms: "traffick illegal arms",
  CrimeHomicide: "commit homicide",
  CrimeGrandTheftAuto: "commit grand theft auto",
  CrimeKidnap: "kidnap someone for ransom",
  CrimeAssassination: "assassinate a high-profile target",
  CrimeHeist: "pull off the ultimate heist",

  // Coding Contract
  // TODO: Move this into Coding contract implementation?
  CodingContractBaseFactionRepGain: 2500,
  CodingContractBaseCompanyRepGain: 4000,
  CodingContractBaseMoneyGain: 75e6,

  // BitNode/Source-File related stuff
  TotalNumBitNodes: 24,

  LatestUpdate: `
<pre><code>[draft] v1.x.x - 2022-01-21
---------------------------

** Information **

Modifications included between 2022-01-16 and 2022-01-21 (f9daf5d to 07fe3c1).

[See Pull Requests on GitHub](https://github.com/search?q=user%3Adanielyxie%20repo%3Abitburner%20is%3Apr%20is%3Amerged%20merged%3A%222022-01-16T22%3A00%3A06.000Z..2022-01-21T04%3A53%3A33.000Z%22)

** Merged Pull Requests **

* update to prevent scam (by @hydroflame)PR #[2730](https://github.com/danielyxie/bitburner/pull/2730)
* RM caching (by @hydroflame)PR #[2724](https://github.com/danielyxie/bitburner/pull/2724)
* Add game version in document.title (by @MartinFournier)PR #[2720](https://github.com/danielyxie/bitburner/pull/2720)
* Fixed Formatting Issue with Coding Contract Documentation (by @JosephDavidTalbot)PR #[2715](https://github.com/danielyxie/bitburner/pull/2715)
* Change &quot;import&quot; to &quot;important&quot; in hackers-starting-handbook.lit (by @JohnnyUrosevic)PR #[2713](https://github.com/danielyxie/bitburner/pull/2713)
* Declaring the script variable in the NS2 example (by @Meowdoleon)PR #[2704](https://github.com/danielyxie/bitburner/pull/2704)
* Update scriptKill example (by @nathangiusti)PR #[2696](https://github.com/danielyxie/bitburner/pull/2696)
* Remove console spamming from CalculateShareMult (by @SagePtr)PR #[2695](https://github.com/danielyxie/bitburner/pull/2695)
* fix asleep (by @hydroflame)PR #[2694](https://github.com/danielyxie/bitburner/pull/2694)
* Use background primary for \`&lt;body&gt;\` (by @nickofolas)PR #[2693](https://github.com/danielyxie/bitburner/pull/2693)
* Add script to generate a markdown changelog (by @MartinFournier)PR #[2692](https://github.com/danielyxie/bitburner/pull/2692)
* v1.4 (by @hydroflame)PR #[2691](https://github.com/danielyxie/bitburner/pull/2691)
* Fix Singularity focus arg issues (by @nickofolas)PR #[2689](https://github.com/danielyxie/bitburner/pull/2689)
* Script Editor Improvements (by @nickofolas)PR #[2684](https://github.com/danielyxie/bitburner/pull/2684)
* Handle &#39;export default&#39; in static RAM calculation (by @theit8514)PR #[2683](https://github.com/danielyxie/bitburner/pull/2683)
* Update sourcefiles.rst (by @theit8514)PR #[2682](https://github.com/danielyxie/bitburner/pull/2682)
* Fix formatting of respect needed on gang UI (by @attrib)PR #[2680](https://github.com/danielyxie/bitburner/pull/2680)
* Change job shortcut test to match sidebar item (by @MartinFournier)PR #[2679](https://github.com/danielyxie/bitburner/pull/2679)
* Fix CI step label for tests (by @tvanderpol)PR #[2677](https://github.com/danielyxie/bitburner/pull/2677)
* Add Formulas.exe on start of bitnode 5 (by @TheMas3212)PR #[2676](https://github.com/danielyxie/bitburner/pull/2676)
* Fix formatting lost in merge commit (by @nickofolas)PR #[2674](https://github.com/danielyxie/bitburner/pull/2674)
* Add tooltips on sidebar icons when collapsed (by @MartinFournier)PR #[2673](https://github.com/danielyxie/bitburner/pull/2673)
* Keep the sidebar opened or closed on reload (by @MartinFournier)PR #[2672](https://github.com/danielyxie/bitburner/pull/2672)
* Fix ns.tail() behaviour for multiple calls (by @gianfun)PR #[2671](https://github.com/danielyxie/bitburner/pull/2671)
* Shortcuts now check to see if feature is unlocked (by @MartinFournier)PR #[2668](https://github.com/danielyxie/bitburner/pull/2668)
* Add check for hash capacity &gt; 0 for MAX_CACHE (by @MartinFournier)PR #[2667](https://github.com/danielyxie/bitburner/pull/2667)
* Remove duplicated &#39;cost&#39; keyword for RAM cost. (by @MartinFournier)PR #[2666](https://github.com/danielyxie/bitburner/pull/2666)
* Add ns.ui.getGameInfo() to retrieve game version (by @MartinFournier)PR #[2665](https://github.com/danielyxie/bitburner/pull/2665)
* Add information to the recovery page (by @MartinFournier)PR #[2664](https://github.com/danielyxie/bitburner/pull/2664)
* Remove extraneous line breaks from buttons (by @nickofolas)PR #[2660](https://github.com/danielyxie/bitburner/pull/2660)
* Fix issues with timestamps on same line as clickable script rows in \`ls\` (by @smolgumball)PR #[2658](https://github.com/danielyxie/bitburner/pull/2658)
* Remove dependents from cache when dependency updated (by @theit8514)PR #[2657](https://github.com/danielyxie/bitburner/pull/2657)
* Minor fix to growth parameter description (by @SagePtr)PR #[2656](https://github.com/danielyxie/bitburner/pull/2656)
* Fix &quot;travel&quot; achievement icon (by @SagePtr)PR #[2655](https://github.com/danielyxie/bitburner/pull/2655)
* Bound log windows to screen (by @SlyCedix)PR #[2654](https://github.com/danielyxie/bitburner/pull/2654)
* Refactor \`for ... in\` loops (by @nickofolas)PR #[2653](https://github.com/danielyxie/bitburner/pull/2653)
* Corp api updates (by @pigalot)PR #[2618](https://github.com/danielyxie/bitburner/pull/2618)</code></pre>

`,
};
