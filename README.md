## Meteor Countries and States

This package allows you to add select menus for all countries and their provinces/states to a template.

### Usage:

Add a select input with all countries:

```
{{> countrySelect}}
```

Add a select input with states and provinces (options will change based on which country is selected)

```
{{> stateProvinceSelect}}
```

Just want the states/provinces? Add `{{> stateProvinceSelect}}` and set a `country-filename` session variable somewhere with the country name. The country's name should be all lowercase, with spaces replaced by hyphens, e.g.:

```
Session.set('country-filename', 'united-states');
```