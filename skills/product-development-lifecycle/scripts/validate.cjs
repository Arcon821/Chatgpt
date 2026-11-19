const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const errors = []

const required = [
  'SKILL.md',
  'VERSION',
  'manifest.json',
  'agents/openai.yaml',
  'references/lifecycle-standard.md',
  'references/clarification-and-evidence.md',
  'references/prototype-and-delivery-gates.md',
  'references/request-expression-guide.md',
  'references/templates.md',
  'references/governance-and-sync.md'
]

for (const relative of required) {
  if (!fs.existsSync(path.join(root, relative))) errors.push('Missing ' + relative)
}

if (!errors.length) {
  const skill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8')
  const version = fs.readFileSync(path.join(root, 'VERSION'), 'utf8').trim()
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'))

  if (!skill.startsWith('---\n') && !skill.startsWith('---\r\n')) errors.push('SKILL.md must start with YAML frontmatter')
  if (!/^name:\s*product-development-lifecycle\s*$/m.test(skill)) errors.push('SKILL.md name mismatch')
  if (!/^description:\s*\S.+$/m.test(skill)) errors.push('SKILL.md needs a description')
  if (!/^\d+\.\d+\.\d+$/.test(version)) errors.push('VERSION must use semantic versioning')
  if (manifest.version !== version) errors.push('manifest.json version must match VERSION')

  const links = [...skill.matchAll(/\]\(([^)]+)\)/g)].map(match => match[1])
  for (const link of links) {
    if (/^[a-z]+:/i.test(link) || link.startsWith('#')) continue
    if (!fs.existsSync(path.resolve(root, link))) errors.push('Broken SKILL.md link: ' + link)
  }

  for (const relative of required.filter(file => file.endsWith('.md'))) {
    const content = fs.readFileSync(path.join(root, relative), 'utf8')
    if (/\b(TODO|TBD|PLACEHOLDER)\b/.test(content)) errors.push('Unfinished placeholder in ' + relative)
  }
}

if (errors.length) {
  for (const error of errors) console.error('ERROR ' + error)
  process.exit(1)
}

console.log('product-development-lifecycle skill is structurally valid (1.0.0).')

