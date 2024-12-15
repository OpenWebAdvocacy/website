import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const languagesBasePath = 'src/_data/languages_base.json';
const languagesBase = JSON.parse(fs.readFileSync(languagesBasePath, 'utf8'));
const supportedLanguages = languagesBase.supported;

supportedLanguages.forEach(language => {
  const languageCode = language.code;

  if (languageCode === 'en') {
    return;
  }

  const sourceFolders = ['src/pages', 'src/posts', 'src/robot-meta'];
  const targetFolders = [
    `src/${languageCode}/pages`,
    `src/${languageCode}/posts`,
    `src/${languageCode}/robot-meta`
  ];

  sourceFolders.forEach((sourceFolder, index) => {
    const targetFolder = targetFolders[index];
    const sourcePath = path.join(process.cwd(), sourceFolder);
    const targetPath = path.join(process.cwd(), targetFolder);

    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, {recursive: true});
    }

    let filesCopied = 0;
    let filesSkipped = 0;

    fs.readdirSync(sourcePath).forEach(file => {
      const sourceFile = path.join(sourcePath, file);
      const targetFile = path.join(targetPath, file);

      // Check if the file is .md or .html
      const ext = path.extname(file);
      if (ext !== '.md' && ext !== '.html') {
        filesSkipped++;
        return;
      }

      if (fs.lstatSync(sourceFile).isFile()) {
        if (fs.existsSync(targetFile)) {
          filesSkipped++;
          return;
        }

        const content = fs.readFileSync(sourceFile, 'utf8');
        const parsed = matter(content);
        const originalPermalink = parsed.data.permalink;

        if (sourceFolder === 'src/pages' || sourceFolder === 'src/robot-meta') {
          // Prepend the language code to the existing permalink in the front matter
          if (originalPermalink) {
            parsed.data.permalink = `/${languageCode}${parsed.data.permalink}`;
          }
          console.log('AFTER parsed.data.permalink', parsed.data.permalink);
          console.log('AFTER poriginalPermalink', originalPermalink);
        } else if (sourceFolder === 'src/posts') {
          // Set the permalink and layout for posts if not explicitly stated
          const fileNameWithoutExtension = path.basename(file, path.extname(file));
          if (!parsed.data.permalink) {
            parsed.data.permalink = `/${languageCode}/blog/${fileNameWithoutExtension}/index.html`;
          }
          if (!parsed.data.layout) {
            parsed.data.layout = 'layouts/post.njk';
          }
        }

        parsed.data.translated = false;

        // Write the updated content to the target file
        const updatedContent = matter.stringify(parsed.content, parsed.data);
        fs.writeFileSync(targetFile, updatedContent);
        filesCopied++;

        // Revert the permalink back to the original value
        parsed.data.permalink = originalPermalink;
      }
    });

    console.log(`Files copied from ${sourceFolder} to ${targetFolder}: ${filesCopied}`);
    console.log(`Files skipped from ${sourceFolder} to ${targetFolder}: ${filesSkipped}`);
  });
});
