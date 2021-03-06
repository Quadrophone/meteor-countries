Package.describe({
    name: 'jpod:countries-states',
    version: '1.0.0',
    summary: 'Provides a list of countries and their states/provinces',
    git: 'https://github.com/Quadrophone/meteor-countries',
    documentation: 'README.md'
});

Package.onUse(function(api) {

    api.versionsFrom('1.2.1');

    api.use(['templating','session','reactive-var'], ['client']);

    api.addAssets([
        'public/provinces/afghanistan.json',
        'public/provinces/albania.json',
        'public/provinces/algeria.json',
        'public/provinces/andorra.json',
        'public/provinces/angola.json',
        'public/provinces/antigua-and-barbuda.json',
        'public/provinces/argentina.json',
        'public/provinces/armenia.json',
        'public/provinces/australia.json',
        'public/provinces/austria.json',
        'public/provinces/azerbaijan.json',
        'public/provinces/bahamas.json',
        'public/provinces/bahrain.json',
        'public/provinces/bangladesh.json',
        'public/provinces/barbados.json',
        'public/provinces/belarus.json',
        'public/provinces/belgium.json',
        'public/provinces/belize.json',
        'public/provinces/benin.json',
        'public/provinces/bhutan.json',
        'public/provinces/bolivia.json',
        'public/provinces/bosnia-and-herzegovina.json',
        'public/provinces/botswana.json',
        'public/provinces/brazil.json',
        'public/provinces/brunei-darussalam.json',
        'public/provinces/bulgaria.json',
        'public/provinces/burkina-faso.json',
        'public/provinces/burundi.json',
        'public/provinces/cambodia.json',
        'public/provinces/cameroon.json',
        'public/provinces/canada.json',
        'public/provinces/cape-verde.json',
        'public/provinces/central-african-republic.json',
        'public/provinces/chad.json',
        'public/provinces/chile.json',
        'public/provinces/china.json',
        'public/provinces/colombia.json',
        'public/provinces/comoros.json',
        'public/provinces/congo-the-democratic-republic-of-the.json',
        'public/provinces/congo.json',
        'public/provinces/costa-rica.json',
        'public/provinces/cote-d-ivoire-republic-of.json',
        'public/provinces/croatia.json',
        'public/provinces/cuba.json',
        'public/provinces/cyprus.json',
        'public/provinces/czech-republic.json',
        'public/provinces/denmark.json',
        'public/provinces/djibouti.json',
        'public/provinces/dominica.json',
        'public/provinces/dominican-republic.json',
        'public/provinces/ecuador.json',
        'public/provinces/egypt.json',
        'public/provinces/el-salvador.json',
        'public/provinces/equatorial-guinea.json',
        'public/provinces/eritrea.json',
        'public/provinces/estonia.json',
        'public/provinces/ethiopia.json',
        'public/provinces/fiji.json',
        'public/provinces/finland.json',
        'public/provinces/france.json',
        'public/provinces/gabon.json',
        'public/provinces/gambia.json',
        'public/provinces/georgia.json',
        'public/provinces/germany.json',
        'public/provinces/ghana.json',
        'public/provinces/greece.json',
        'public/provinces/greenland.json',
        'public/provinces/grenada.json',
        'public/provinces/guatemala.json',
        'public/provinces/guinea-bissau.json',
        'public/provinces/guinea.json',
        'public/provinces/guyana.json',
        'public/provinces/haiti.json',
        'public/provinces/honduras.json',
        'public/provinces/hong-kong.json',
        'public/provinces/hungary.json',
        'public/provinces/iceland.json',
        'public/provinces/india.json',
        'public/provinces/indonesia.json',
        'public/provinces/iran-islamic-republic-of.json',
        'public/provinces/iraq.json',
        'public/provinces/ireland.json',
        'public/provinces/israel.json',
        'public/provinces/italy.json',
        'public/provinces/jamaica.json',
        'public/provinces/japan.json',
        'public/provinces/jordan.json',
        'public/provinces/kazakhstan.json',
        'public/provinces/kenya.json',
        'public/provinces/kiribati.json',
        'public/provinces/korea-democratic-people-s-republic-of.json',
        'public/provinces/korea-republic-of.json',
        'public/provinces/kuwait.json',
        'public/provinces/kyrgyzstan.json',
        'public/provinces/lao-people-s-democratic-republic.json',
        'public/provinces/latvia.json',
        'public/provinces/lebanon.json',
        'public/provinces/lesotho.json',
        'public/provinces/liberia.json',
        'public/provinces/libyan-arab-jamahiriya.json',
        'public/provinces/liechtenstein.json',
        'public/provinces/lithuania.json',
        'public/provinces/luxembourg.json',
        'public/provinces/macedonia-the-former-yugoslav-republic-of.json',
        'public/provinces/madagascar.json',
        'public/provinces/malawi.json',
        'public/provinces/malaysia.json',
        'public/provinces/maldives.json',
        'public/provinces/mali.json',
        'public/provinces/malta.json',
        'public/provinces/marshall-islands.json',
        'public/provinces/mauritania.json',
        'public/provinces/mauritius.json',
        'public/provinces/mexico.json',
        'public/provinces/micronesia-federated-states-of.json',
        'public/provinces/moldova-republic-of.json',
        'public/provinces/monaco.json',
        'public/provinces/mongolia.json',
        'public/provinces/montenegro.json',
        'public/provinces/morocco.json',
        'public/provinces/mozambique.json',
        'public/provinces/myanmar.json',
        'public/provinces/namibia.json',
        'public/provinces/nauru.json',
        'public/provinces/nepal.json',
        'public/provinces/netherlands.json',
        'public/provinces/new-zealand.json',
        'public/provinces/nicaragua.json',
        'public/provinces/niger.json',
        'public/provinces/nigeria.json',
        'public/provinces/norway.json',
        'public/provinces/oman.json',
        'public/provinces/pakistan.json',
        'public/provinces/palau.json',
        'public/provinces/palestinian-territory-occupied.json',
        'public/provinces/panama.json',
        'public/provinces/papua-new-guinea.json',
        'public/provinces/paraguay.json',
        'public/provinces/peru.json',
        'public/provinces/philippines.json',
        'public/provinces/poland.json',
        'public/provinces/portugal.json',
        'public/provinces/qatar.json',
        'public/provinces/romania.json',
        'public/provinces/russian-federation.json',
        'public/provinces/rwanda.json',
        'public/provinces/saint-helena-ascension-and-tristan-da-cunha.json',
        'public/provinces/saint-kitts-and-nevis.json',
        'public/provinces/saint-lucia.json',
        'public/provinces/saint-vincent-and-the-grenadines.json',
        'public/provinces/samoa.json',
        'public/provinces/san-marino.json',
        'public/provinces/sao-tome-and-principe.json',
        'public/provinces/saudi-arabia.json',
        'public/provinces/senegal.json',
        'public/provinces/serbia.json',
        'public/provinces/seychelles.json',
        'public/provinces/sierra-leone.json',
        'public/provinces/singapore.json',
        'public/provinces/slovakia.json',
        'public/provinces/slovenia.json',
        'public/provinces/solomon-islands.json',
        'public/provinces/somalia.json',
        'public/provinces/south-africa.json',
        'public/provinces/south-sudan.json',
        'public/provinces/spain.json',
        'public/provinces/sri-lanka.json',
        'public/provinces/sudan.json',
        'public/provinces/suriname.json',
        'public/provinces/swaziland.json',
        'public/provinces/sweden.json',
        'public/provinces/switzerland.json',
        'public/provinces/syrian-arab-republic.json',
        'public/provinces/taiwan-province-of-china.json',
        'public/provinces/tajikistan.json',
        'public/provinces/tanzania-united-republic-of.json',
        'public/provinces/thailand.json',
        'public/provinces/timor-leste.json',
        'public/provinces/togo.json',
        'public/provinces/tonga.json',
        'public/provinces/trinidad-and-tobago.json',
        'public/provinces/tunisia.json',
        'public/provinces/turkey.json',
        'public/provinces/turkmenistan.json',
        'public/provinces/tuvalu.json',
        'public/provinces/uganda.json',
        'public/provinces/ukraine.json',
        'public/provinces/united-arab-emirates.json',
        'public/provinces/united-kingdom.json',
        'public/provinces/united-states-minor-outlying-islands.json',
        'public/provinces/united-states.json',
        'public/provinces/uruguay.json',
        'public/provinces/uzbekistan.json',
        'public/provinces/vanuatu.json',
        'public/provinces/venezuela.json',
        'public/provinces/viet-nam.json',
        'public/provinces/yemen.json',
        'public/provinces/zambia.json',
        'public/provinces/zimbabwe.json'
        ], 
        ['server']);

    api.addFiles([
        'client/locations.html',
        'client/locations.js'
    ], ['client']);


    api.addFiles([
        'server/locations.js'
    ], ['server']);

});
