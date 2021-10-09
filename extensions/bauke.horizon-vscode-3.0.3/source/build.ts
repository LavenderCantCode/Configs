import {promises as fsp} from 'fs';
import mustache from 'mustache';

async function entry(): Promise<void> {
  // These directories correspond to the `source/...` ones.
  const themeDirectories: string[] = ['dark', 'light'];
  // Create the `themes/` directory, the recursive option will prevent an error
  // when the directory already exists.
  await fsp.mkdir(`${__dirname}/../themes/`, {recursive: true});
  for (const directory of themeDirectories) {
    console.log(`Rendering ${directory} theme.`);
    const colors: Record<string, unknown> = JSON.parse(
      await fsp.readFile(`${__dirname}/${directory}/colors.json`, 'utf8')
    );
    const metadata: Record<string, unknown> = JSON.parse(
      await fsp.readFile(`${__dirname}/${directory}/metadata.json`, 'utf8')
    );
    const template: string = await fsp.readFile(
      `${__dirname}/${directory}/template.json`,
      'utf8'
    );
    await fsp.writeFile(
      `${__dirname}/../themes/horizon-${directory}.json`,
      mustache.render(template, {...colors, ...metadata})
    );
  }

  console.log('Done!');
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
entry();
