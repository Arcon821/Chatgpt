# Product Development Lifecycle Skill

一套供人和 AI 共用的产品到开发闭环知识库与 Codex Skill。

它帮助团队把一个想法逐步推进为可验证的产品成果：

```text
想法 → 需求 → 产品方案 → 高保真原型 → 技术方案
     → 增量开发 → 分层测试 → 发布 → 复盘 → 知识回写
```

## 它解决什么问题

- 需求没有说清楚就开始开发，后期反复修改。
- 产品、设计、开发和测试使用不同的“完成”定义。
- AI不断追问无关细节，或者在关键歧义上自行猜测。
- 原型只展示正常页面，没有错误、空数据、权限和返回路径。
- 单个项目的经验没有沉淀，下个项目再次从零开始。
- 公共规范被复制到多个项目后逐渐不一致。

## 核心能力

- 完整产品生命周期与分阶段门禁。
- 高保真原型先于技术方案和开发的确认机制。
- 含糊词、默认前提、证据、相反解释和双向影响审计。
- 同一维度多次修改后的“对齐检查点”。
- 需求表达、原型签署、技术映射、验收和复盘模板。
- 公共标准唯一来源、语义版本和项目差异层。
- 区分需求确认、原型确认、代码、本地、设备、云端、发布和结果验证。

## 什么时候使用

适合：

- 新产品或重要功能从想法进入开发。
- 目标、范围或验收标准仍不清楚。
- 同一需求已经多次修改，双方理解仍未对齐。
- 需要高保真原型、技术方案、交付计划或项目复盘。
- 团队希望把项目经验升级为跨项目公共标准。

不适合：

- 已有稳定需求和验收标准的窄范围代码修改。
- 单纯查询一个技术事实。
- 用户只要求执行已明确的实现步骤，且没有生命周期评审需求。

## 安装

把整个目录放入 Codex Skills 目录：

```text
~/.codex/skills/product-development-lifecycle/
```

目录中必须保留 `SKILL.md`、`agents/`、`references/`、`scripts/`、`VERSION` 和 `manifest.json`。安装后在新的 Codex 会话中调用：

```text
$product-development-lifecycle
```

若多个本机项目需要共用同一份标准，建议让全局 Skill 目录指向一个权威工作目录，而不是复制多份后分别修改。

## 快速开始

```text
使用 $product-development-lifecycle。

我要解决：[目标用户] 在 [场景] 中的 [问题]。
成功表现为：[可观察结果]。

当前已有：[代码、文档、数据、原型或反馈]。
本次包含：[范围]；不包含：[排除项]。
已经确认：[无需重复询问的决定]。

请先检查关键含糊词、默认前提、证据、相反解释和双向影响。
只有会改变目标、范围、体验或验收的问题才询问我。

确认后先制作高保真原型；我确认逻辑、动线和视觉后，
再输出技术方案并进入开发。
```

完整表达方法见 [`references/request-expression-guide.md`](references/request-expression-guide.md)。

## 知识库结构

| 文件 | 用途 |
| --- | --- |
| [`SKILL.md`](SKILL.md) | AI 入口、触发边界和工作路由 |
| [`lifecycle-standard.md`](references/lifecycle-standard.md) | 想法到复盘的完整标准 |
| [`clarification-and-evidence.md`](references/clarification-and-evidence.md) | 澄清、证据与反向解释 |
| [`prototype-and-delivery-gates.md`](references/prototype-and-delivery-gates.md) | 原型、技术方案、开发和交付门禁 |
| [`request-expression-guide.md`](references/request-expression-guide.md) | 教用户如何表达需求 |
| [`templates.md`](references/templates.md) | 可复制的产品和交付模板 |
| [`governance-and-sync.md`](references/governance-and-sync.md) | 版本、审批和跨项目同步 |

## 证据语言

知识库使用六类标签：

- `O`：当前运行、截图、日志、量测或用户操作。
- `R`：官方资料、研究、标准或授权来源。
- `D`：为了目标作出的设计决定。
- `H`：尚待验证的假设。
- `X`：反例或相反解释。
- `B`：缺少资产、权限、许可、设备或决定造成的外部阻塞。

这样可以防止把原型当成生产能力、把源码存在当成线上正常、把设计决定说成外部事实。

## 版本与贡献

当前版本见 [`VERSION`](VERSION)。公共规则的更新必须包含证据、适用边界、反例以及采用或拒绝的影响，并经过标准所有者批准。项目可保存自己的差异层，但不能静默改写公共规则。

详细流程见 [`references/governance-and-sync.md`](references/governance-and-sync.md)。

## 校验

```bash
node scripts/validate.cjs
```

校验器检查必需文件、Skill frontmatter、版本一致性、入口链接和未完成占位符。

