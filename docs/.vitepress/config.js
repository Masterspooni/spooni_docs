export default {
  base: "/",
  title: "SPOONI Development",
  description: "SPOONI Development",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/logo.png" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "SPOONI Development",
    outline: "deep",
    nav: [
      { text: "Docs", link: "/docs" },
      { text: "MICO", link: "/mico" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Spooni-Development' },
      { icon: 'discord', link: 'https://discord.gg/TaaSXRdaNK' },
      { icon: 'youtube', link: 'https://www.youtube.com/@masterfighter2698' },
    ],
    sidebar: [
      {
        text: 'Mappings',
        collapsed: true,
        items: [

          { text: "Ambarino", collapsed: true, items:[
            {text: "🔸Baccus Station", link:'/doc_mappings/ambarino/spooni_bacchus_station'},
          ]},

          { text: "Lemoyne", collapsed: true, items:[
            // {text: "Rhodes", collapsed: true, items: [
            // ]},
            {text: "St. Denis", collapsed: true, items: [
              // {text: "🔸Bake + Flor + Brew", link:'/doc_mappings/lemoyne/spooni_sd_bake_flor_brew'},
              {text: "🔸Cart + Woodworker", link:'/doc_mappings/lemoyne/spooni_sd_cart_woodworker'},
              {text: "🔸Courthouse", link:'/doc_mappings/lemoyne/spooni_sd_courthouse'},
              // {text: "🔸Farming", link:'/doc_mappings/lemoyne/spooni_sd_farming'},
              {text: "🔸Fight Club", link:'/doc_mappings/lemoyne/spooni_sd_fight_club'},
              // {text: "🔸Furniture", link:'/doc_mappings/lemoyne/spooni_sd_furniture'},
              // {text: "🔸General Store", link:'/doc_mappings/lemoyne/spooni_sd_general-store'},
              // {text: "🔸Jeweler", link:'/doc_mappings/lemoyne/spooni_sd_jeweler'},
              // {text: "🔸Newspaper", link:'/doc_mappings/lemoyne/spooni_sd_newspaper'},
              // {text: "🔸Police Station", link:'/doc_mappings/lemoyne/spooni_sd_policestation'},
              // {text: "🔸Slums", link:'/doc_mappings/lemoyne/spooni_sd_slums'},
              // {text: "🔸Spalding", link:'/doc_mappings/lemoyne/spooni_sd_spalding'},
              {text: "🔸Train Station", link:'/doc_mappings/lemoyne/spooni_sd_trainstation'},
              {text: "🔸Villa 1", link:'/doc_mappings/lemoyne/spooni_sd_villa_1'},
              // {text: "🔸Warehouse", link:'/doc_mappings/lemoyne/spooni_sd_warehouse'},
            ]},
            {text: "🔸Bra Storage House", link:'/doc_mappings/lemoyne/spooni_bra_storage_house'},
            {text: "🔸Caliga Hall", link:'/doc_mappings/lemoyne/spooni_caliga_hall'},
            {text: "🔸Dewberry Creek", link:'/doc_mappings/lemoyne/spooni_dewberry_creek'},
          ]},

          { text: "New Austin", collapsed: true, items:[
            // {text: "Armadillo", collapsed: true, items: [
            // ]},
            // {text: "Tumbleweed", collapsed: true, items: [
            // ]},
            {text: "🔸MacFarlane's Ranch", link:'/doc_mappings/new-austin/spooni_mac_farlanes_ranch'},
            {text: "🔸Rathskeller Fork", link:'/doc_mappings/new-austin/spooni_rathskeller_fork'},
          ]},

          { text: "New Hanover", collapsed: true, items:[
            {text: "Annesburg", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/new-hanover/spooni_ann_reborn'},
            ]},
            {text: "Valentine", collapsed: true, items: [
              {text: "🔸Church", link:'/doc_mappings/new-hanover/spooni_val_church'},
              {text: "🔸Law Office", link:'/doc_mappings/new-hanover/spooni_val_law_office'},
            ]},
            {text: "Van Horn", collapsed: true, items: [
              {text: "🔸Brothel House", link:'/doc_mappings/new-hanover/spooni_van_brothel_house'},
            ]},
            {text: "🔸Emerald Ranch Saloon", link:'/doc_mappings/new-hanover/spooni_emerald_saloon'},
          ]},

          { text: "West Elizabeth", collapsed: true, items:[
            {text: "Blackwater", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/west-elizabeth/spooni_bla_reborn'},
            ]},
            {text: "Strawberry", collapsed: true, items: [
              {text: "🔸Stable", link:'/doc_mappings/west-elizabeth/spooni_straw_stable'},
            ]},
            {text: "🔸Pronghorn Ranch", link:'/doc_mappings/west-elizabeth/spooni_pronghorn_ranch'},
            {text: "🔸Manzanita Post", link:'/doc_mappings/west-elizabeth/spooni_manzanita_post'},
          ]},
        
        ]
      },
      {
          text: 'Scripts',
          collapsed: true,
          items: [
            // { text: "💀 Blackmarket", link:'/doc_scripts/spooni/spooni_blackmarket' },
            // { text: "🏨 Hotel", link:'/doc_scripts/spooni/spooni_hotel' },
            // { text: "🏠 Housebuilder", link:'/doc_scripts/spooni/spooni_housebuilder' },
            { text: "🪑 Interactions", link:'/doc_scripts/spooni/spooni_interactions' },
            { text: "💻 Spooner", link:'doc_scripts/spooni/spooni_spooner' },
            // { text: "🏹 Tippi", link:'/doc_scripts/spooni/spooni_tippi' },
            // { text: "🌱 VegMod", link:'doc_scripts/spooni/spooni_vegmod' },
            // { text: "🎄 Xmas", link:'/doc_scripts/spooni/spooni_xmas' },

            // { text: "DrShwaggins Scripts", collapsed: true, items:[
            //   { text: "RedM", collapsed: true, items:[
            //     { text: "💵 Billing", link:'doc_scripts/drshwaggins/redm/dl_advancedbilling' },
            //     { text: "🏪 Stores", link:'doc_scripts/drshwaggins/redm/dl_advancedstores' },
            //     { text: "🎥 Cutscenes", link:'doc_scripts/drshwaggins/redm/dl_cutscenes' },
            //     { text: "💾 DB Backup", link:'doc_scripts/drshwaggins/redm/dl_dbbackup' },
            //     { text: "🍊 Farmroutes", link:'doc_scripts/drshwaggins/redm/dl_farmroutes' },
            //     { text: "🧮 Society", link:'doc_scripts/drshwaggins/redm/dl_society' },
            //     { text: "📦 Storages", link:'doc_scripts/drshwaggins/redm/dl_storages' },
            //     { text: "⚔️ Whitelist", link:'doc_scripts/drshwaggins/redm/dl_questionwhitelist' },
            //   ]},
            //   { text: "FiveM", collapsed: true, items:[
            //     { text: "🎀 Accessories ", link:'doc_scripts/drshwaggins/fivem/dl_accessories' },
            //     { text: "💾 DB Backup", link:'doc_scripts/drshwaggins/fivem/dl_dbbackup' },
            //     { text: "💳 Supermarket", link:'doc_scripts/drshwaggins/fivem/dl_supermarket' },
            //   ]},
            // ]},
          ]
      },
    ],
    footer: {
      message: "Released under the GNU General Public License v3.0.",
      copyright: 'Copyright © 2022 SPOONI Development',
    },
  },
};
