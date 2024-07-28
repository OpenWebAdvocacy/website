# Contributing

First off, thanks for taking the time to contribute!

To contribute to code or an existing note in this repository, first create a fork and then make a change on your fork. Next, create a pull request that contains your changes to a document. Your pull request will be reviewed by a project maintainer and then merged into the main repository.

## Help with website translations

If you're comfortable with code, please follow the instructions below. If you're not comfortable with code but still want to help, reach out to us on [Discord](https://discord.gg/x53hkqrRKx).

### Adding a new language

New languages require translation of the global website content at a minimum. This includes things like banners, header, footer and navigation.  

Minimum files to include in your PR:
- `_data/navigation.json`
- `_data/languages_base.json`

The new language object in these files must include all properties on the `en` object.

The object key should match the [ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).

The url of navigation links should remain in english.

### Adding a translated page

If the language has no existing translated pages, please ensure the language has been added to the global files (see above). Translated pages should live in a folder with the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) as the name. For example `/src/es/` for Spanish translated pages.

Find the page you want to translate in the `src/pages` directory. This could be html or markdown. 

Copy the page and paste into the relevant language folder. 

The file name of the new language page must be identical to the english version. 

Translate the new page, including the front matter title and meta description. 

The permalink front matter should be updated to include the language code as a parent folder. For example `permalink: '/get-involved/'` becomes `permalink: /es/get-involved/`.

Raise a pull request :tada:


### Guidelines

A few questions you may have when translating:

- "Open Web Advocacy" should be treated as a proper noun and remain in English.
- Hashtags and social media platform names should be treated as proper nouns and remain in English.
- If the translated language has a formal and informal option, err on the side of direct and informal. For example in Spanish, this would be using the term "tú" instead of "usted". 
When not sure, check out what similiar organisations like Wikipedia, Greenpeace and Mozilla do. Or feel free to reach out to us on [Discord](https://discord.gg/x53hkqrRKx).
