+++
title = "每日动态｜2026-03-13｜近一周海洋智能预测与重建相关论文汇总"
date = 2026-03-13
draft = false
[extra]
tags = ["daily", "weekly-roundup", "ocean-ai", "wave-forecasting", "reconstruction"]
+++

这篇 weekly roundup 整理了 **2026-03-06 到 2026-03-13** 之间，与海浪/海况预测、海洋环境要素重建、海洋遥感机器学习、缺测重建和近岸风险预测相关的新文章。筛选标准偏向“和你的研究至少中度相关”，所以并不只收显著波高，也纳入了方法上可迁移的海洋环境监测与时空重建论文。

这一周最值得优先看的，仍然是那篇直接做 **coastal wave / significant wave height forecasting** 的工作；其后是几篇在 **稀疏观测重建、多源遥感反演、时空缺测补全、概率海洋预报** 上很有借鉴味道的文章。另有少数条目正文摘要或来源信息仍待核验，本文只保留已核验外链，未核验条目暂不附链接。

<!-- more -->

## 1. 本周筛选结论

本轮重点覆盖了 arXiv、Springer、MDPI、Frontiers、AGU、HESS、Taylor & Francis 等来源。

整体看下来，这一周**真正高度贴合“波浪/海况预测与重建”**的新条目并不算多，但仍然筛出 12 篇值得留档的文章。其中特别直接相关的是：

- **波浪/海况预测**：1 篇
- **海洋环境场重建 / 稀疏观测可迁移方法**：3 篇
- **海洋遥感 + 机器学习监测**：4 篇
- **相邻方向（概率海洋预报、上游气旋驱动、coastal hazard、海洋工程 ML）**：4 篇

没有检到明确符合时间窗且高度相关的 **EarthArXiv、EGUsphere/EGU、Ocean Engineering、Applied Ocean Research、IEEE Xplore** 新条目。

## 2. 最值得优先读的 8 篇

排序依据主要看四点：

1. 与核心方向的直接性：波浪/海况/SWH > 海洋环境场重建 > 海洋监测 AI > 相邻 coastal hazard
2. 方法可迁移性：时序分解、时空深度学习、Transformer、可解释 ML、缺测重建、不确定性表达
3. 是否适合后续写成单篇 daily 深拆
4. 来源可信度与日期确定性

### Top 1
**Enhancing Coastal Wave Forecasts Around the Korean Peninsula with Time-Series Decomposition and Spatio-Temporal Deep Learning**  
- Date: 2026-03-11  
- Venue: Ocean Science Journal  
- Link: <https://doi.org/10.1007/s12601-026-00273-x>  
- Why it matters: 直接打中海浪/海况预测主线，而且是“时序分解 + 时空深度学习”的组合。  

### Top 2
**EOF-UViT Model: A New Deep Learning Model to Reconstruct the Three-Dimensional Salinity Based on Multi-Source Remote Sensing Data**  
- Date: 2026-03-06  
- Venue: Remote Sensing  
- Link: 暂不附外链（来源待核验）  
- Why it matters: 虽然目标变量是盐度，但“多源遥感 → 三维海洋场重建”这条路，对波高/海况重建很有借鉴性。  

### Top 3
**Inversion and Interpretability Analysis of Bottom-Water Dissolved Oxygen in the Bohai Sea Using Multi-Source Remote Sensing Data**  
- Date: 2026-03-09  
- Venue: Remote Sensing  
- Link: <https://doi.org/10.3390/rs18050838>  
- Why it matters: 多源遥感反演 + 可解释 ML，方法味道很正，且做了时滞分析。  

### Top 4
**Hybrid transformer-SVR framework for coastal eutrophication assessment through satellite-based retrieval of non-optically active water quality parameters**  
- Date: 2026-03-07  
- Venue: Journal of Oceanology and Limnology  
- Link: 暂不附外链（来源待核验）  
- Why it matters: transformer + SVR 的混合思路，和“间接观测反演难测参数”非常贴。  

### Top 5
**Ensemble Graph Neural Networks for Probabilistic Sea Surface Temperature Forecasting via Input Perturbations**  
- Date: 2026-03-06  
- Venue: arXiv  
- Link: <https://arxiv.org/abs/2603.06153v1>  
- Why it matters: 海洋预报里的概率建模与不确定性表达，方法层面对波浪预报同样有参考价值。  

### Top 6
**Imputing Missing Long-Term Spatiotemporal Multivariate Atmospheric Data With CNN‐Transformer Machine Learning**  
- Date: 2026-03-09  
- Venue: JGR: Machine Learning and Computation  
- Link: 暂不附外链（来源待核验）  
- Why it matters: 目标虽是大气，但“长时空多变量缺测重建”与海洋稀疏观测问题高度同构。  

### Top 7
**Estimating Mediterranean Cyclone Activity via Explainable Machine Learning**  
- Date: 2026-03-11  
- Venue: JGR: Machine Learning and Computation  
- Link: 暂不附外链（来源待核验）  
- Why it matters: 地中海气旋是风浪上游强驱动，这篇可解释 ML 适合补“物理驱动—海况响应”视角。  

### Top 8
**Satellite-based machine learning models for chlorophyll-a and TSS retrieval in Abu Dhabi’s coastal waters**  
- Date: 2026-03-06  
- Venue: Frontiers in Marine Science  
- Link: <https://doi.org/10.3389/fmars.2026.1787597>  
- Why it matters: 典型海岸带遥感 + 机器学习反演工作，属于环境监测延伸方向里的扎实样本。  

## 3. 全部条目整理

### 3.1 Enhancing Coastal Wave Forecasts Around the Korean Peninsula with Time-Series Decomposition and Spatio-Temporal Deep Learning
- **Date:** 2026-03-11
- **Venue/Source:** Ocean Science Journal
- **URL:** <https://doi.org/10.1007/s12601-026-00273-x>
- **Relevance:** 直接做沿海波浪/显著波高预测，是本周和你研究主线最贴的一篇。
- **Summary:** 文章基于 ERA5 波浪数据，构建了用于韩国半岛周边海域 SWH 预测的深度学习框架。作者先做时序分解，再把长期趋势、季节项和残差作为并行输入送入时空网络，相比基线 ConvLSTM 类模型有明显提升。摘要里提到在黄海等复杂海区预测精度最高可提升约 30%，并指出 12 h 输入窗在精度和效率之间较均衡。
- **Suggested tags:** `wave-forecasting`, `significant-wave-height`, `spatiotemporal-deep-learning`, `time-series-decomposition`, `coastal-ocean`
- **Confidence:** high

### 3.2 EOF-UViT Model: A New Deep Learning Model to Reconstruct the Three-Dimensional Salinity Based on Multi-Source Remote Sensing Data
- **Date:** 2026-03-06
- **Venue/Source:** Remote Sensing
- **URL:** 暂不附外链（来源待核验）
- **Relevance:** 典型“海洋环境要素 + 稀疏观测 + 数据驱动重建”，方法可迁移到波浪/海况重建任务。
- **Summary:** 文章提出 EOF-UViT，用多源海表遥感因子重建西北太平洋日尺度三维盐度场。与 U-Net 基线和 MODAS 重建相比，它在水平结构和垂向一致性上都更好，collocated in situ profiles 验证结果达到 RMSE = 0.094 psu、R² = 0.904。核心价值不只在盐度变量本身，更在于展示了如何把表层遥感信息映射到三维海洋内部场。
- **Suggested tags:** `salinity-reconstruction`, `remote-sensing`, `vision-transformer`, `data-driven-oceanography`, `sparse-observations`
- **Confidence:** medium

### 3.3 Inversion and Interpretability Analysis of Bottom-Water Dissolved Oxygen in the Bohai Sea Using Multi-Source Remote Sensing Data
- **Date:** 2026-03-09
- **Venue/Source:** Remote Sensing
- **URL:** <https://doi.org/10.3390/rs18050838>
- **Relevance:** 海洋环境监测里的多源遥感 + 机器学习反演，且显式处理时滞和可解释性。
- **Summary:** 文章针对渤海底层溶解氧难以直接遥感监测的问题，建立了融合多源卫星变量与树模型的反演框架。作者引入表层生物光学信号对底层 DO 的 14 天时滞，用 GA 选特征后训练 XGBoost，摘要报告 R² = 0.86、RMSE = 0.79 mg/L。进一步加入物理约束变量后，模型性能还能继续提升，并据此重建了 2014–2025 年的长期分布。
- **Suggested tags:** `dissolved-oxygen`, `bohai-sea`, `remote-sensing`, `xgboost`, `environmental-monitoring`
- **Confidence:** high

### 3.4 Hybrid transformer-SVR framework for coastal eutrophication assessment through satellite-based retrieval of non-optically active water quality parameters
- **Date:** 2026-03-07
- **Venue/Source:** Journal of Oceanology and Limnology
- **URL:** 暂不附外链（来源待核验）
- **Relevance:** 海岸环境要素长期监测，强调遥感难测参数的 ML 反演，和稀疏/间接观测重建很像。
- **Summary:** 文章提出 transformer-SVR 混合框架，用于青岛近岸 2000–2022 年 MODIS 数据上的富营养化相关参数反演。摘要显示它对 COD 和 SRP 的效果优于 RF、1D-CNN 和 CNN/LSTM-SVR 等基线，而 DIN 仍然较难。除了模型本身，作者还分析了水深、纬度、潮滩邻近性和陆源营养盐通量等对时空异质性的调控作用。
- **Suggested tags:** `coastal-eutrophication`, `transformer-svr`, `satellite-retrieval`, `coastal-monitoring`, `marine-water-quality`
- **Confidence:** medium

### 3.5 Satellite-based machine learning models for chlorophyll-a and TSS retrieval in Abu Dhabi’s coastal waters
- **Date:** 2026-03-06
- **Venue/Source:** Frontiers in Marine Science
- **URL:** <https://doi.org/10.3389/fmars.2026.1787597>
- **Relevance:** 标准海岸带遥感反演 + ML 工作，属于海洋环境监测 AI 的直接新作。
- **Summary:** 文章用 Sentinel-2 Level-2A 反射率与实测样本配准，针对阿布扎比海岸水域的 Chl-a 与 TSS 建模。作者比较了文献光谱指数与 PCA+原始波段两类特征工程，并测试了 RFR、SVR、XGB、PLS 等模型。结果显示 Chl-a 的最佳模型是 XGB + PCA，TSS 的最佳模型是 PCA + Random Forest，说明在样本有限的近海场景中，传统 ML 依旧很能打。
- **Suggested tags:** `chlorophyll-a`, `tss-retrieval`, `sentinel-2`, `machine-learning`, `coastal-waters`
- **Confidence:** high

### 3.6 Monitoring Coastal Water Quality Using Remote Sensing and Machine Learning
- **Date:** 2026-03-11
- **Venue/Source:** Ocean Science Journal
- **URL:** 暂不附外链（来源待核验）
- **Relevance:** 虽非波浪，但在“海洋环境监测中的 AI/数据驱动方法”上是直接相关的新文。
- **Summary:** 文章结合 2019–2024 年 Sentinel-2 与一次 2021-03-10 的 in situ 采样，分析墨西哥 La Paz 湾的 Chl-a、浊度和 DO 空间分布。作者测试了 XGBoost、SVR、MLP、MDN 等模型，认为 ML 在水质属性分类和预估上提供了比传统现场监测更可扩展、成本更低的方案。论文重点是把多指标水质监测做成近实时、可空间化的海岸生态监测框架。
- **Suggested tags:** `coastal-water-quality`, `sentinel-2`, `machine-learning`, `dissolved-oxygen`, `marine-monitoring`
- **Confidence:** medium

### 3.7 Ensemble Graph Neural Networks for Probabilistic Sea Surface Temperature Forecasting via Input Perturbations
- **Date:** 2026-03-06
- **Venue/Source:** arXiv
- **URL:** <https://arxiv.org/abs/2603.06153v1>
- **Relevance:** 海洋时间序列预报 + 概率预测/不确定性表达，方法层面对波浪预报很有参考价值。
- **Summary:** 这篇预印本研究区域海表温度预测中的 GNN 集成设计，重点不是把点预测做得更狠，而是把不确定性表达做得更可靠。作者用对初始海洋状态加扰动而非重训多模型的方式构建 ensemble，并比较 Gaussian、Perlin、fractal Perlin 等扰动策略。结果显示空间相干的扰动能在 15 天预报尺度上带来更好的校准和 CRPS。
- **Suggested tags:** `sea-surface-temperature`, `graph-neural-network`, `probabilistic-forecasting`, `uncertainty-quantification`, `arxiv`
- **Confidence:** high

### 3.8 Estimating Mediterranean Cyclone Activity via Explainable Machine Learning
- **Date:** 2026-03-11
- **Venue/Source:** Journal of Geophysical Research: Machine Learning and Computation
- **URL:** 暂不附外链（来源待核验）
- **Relevance:** 地中海气旋直接关联风浪极端，虽然不是直接预测 SWH，但属于海况上游驱动因子的 ML 建模。
- **Summary:** 文章用 CNN 从大尺度气候场估计月尺度地中海气旋活动，并以 Accumulated Cyclone Energy 表征强度、频次和持续时间。作者结合嵌套交叉验证和贝叶斯优化选超参数与输入变量，报告月尺度相关系数约 0.83。更有意思的是，它还做了内部激活可视化，说明模型确实在关注传统气旋生成关键区域。
- **Suggested tags:** `mediterranean-cyclones`, `explainable-ai`, `cnn`, `extreme-weather`, `wave-forcing`
- **Confidence:** medium

### 3.9 Imputing Missing Long-Term Spatiotemporal Multivariate Atmospheric Data With CNN‐Transformer Machine Learning
- **Date:** 2026-03-09
- **Venue/Source:** Journal of Geophysical Research: Machine Learning and Computation
- **URL:** 暂不附外链（来源待核验）
- **Relevance:** 核心方法是长时空多变量缺测重建，这和海洋稀疏观测/重建问题在方法论上高度同构。
- **Summary:** 文章提出 CT-MVP，用 CNN 提取局地特征、Transformer 建模长程时空依赖，用于大气多变量长期缺测插补。作者在 13 年 SD-WACCM-X 数据上测试，声称比传统方法和简单 Transformer 都更好，尤其在长时段缺测条件下优势更明显。虽然目标变量是大气，但这套“高维地球系统时空场重建”思路对海洋场补全非常值得借。
- **Suggested tags:** `missing-data-imputation`, `cnn-transformer`, `spatiotemporal-reconstruction`, `geoscience-ml`, `data-scarcity`
- **Confidence:** medium

### 3.10 Climate adaptation-aware flood prediction for coastal cities using Deep Learning
- **Date:** 2026-03-11
- **Venue/Source:** Hydrology and Earth System Sciences
- **URL:** <https://doi.org/10.5194/hess-30-1333-2026>
- **Relevance:** 属于 coastal hazard 预测，和海况/风浪驱动的近岸风险研究链条相邻。
- **Summary:** 文章针对海平面上升和海岸适应措施情景下的城市洪涝预测，提出了轻量 CNN 框架，试图替代高成本水动力模拟。重点是低资源、可泛化到不同海岸城市场景，而不是仅做单城拟合。对海况—灾害耦合方向来说，这篇更像应用外延而不是核心技术文。
- **Suggested tags:** `coastal-flooding`, `deep-learning`, `climate-adaptation`, `coastal-hazard`, `city-scale-modeling`
- **Confidence:** high

### 3.11 Machine Learning Based Mesh Movement for Non-Hydrostatic Tsunami Simulation
- **Date:** 2026-03-06
- **Venue/Source:** arXiv
- **URL:** <https://arxiv.org/abs/2603.06152v1>
- **Relevance:** 偏海洋工程数值模拟，但把 ML 用在非静水海啸模拟网格自适应加速上，也算数据驱动海洋工程方法。
- **Summary:** 这篇预印本将 ML 驱动的 mesh movement / mesh adaptivity 方法接入非静水浅水模型，用于海啸传播、爬高和淹没模拟。作者在 Thetis / Firedrake 框架上实现，并用基准测试与实验室观测验证。结果表明，ML surrogate 能加速传统网格移动过程，同时在强非线性波条件下保持较好稳健性。
- **Suggested tags:** `tsunami-simulation`, `mesh-adaptivity`, `machine-learning`, `coastal-hazards`, `arxiv`
- **Confidence:** high

### 3.12 Nearshore bathymetry estimation from SAR imagery based on the adaptive window guided by local wave direction
- **Date:** 2026-03-08
- **Venue/Source:** International Journal of Remote Sensing
- **URL:** <https://doi.org/10.1080/01431161.2026.2641156>
- **Relevance:** 和近岸波浪遥感、海底地形反演、海况观测链路相关，但不是直接的 ML 波浪预测文。
- **Summary:** 从题目和元数据看，这篇文章聚焦利用 SAR 影像并结合局地波向信息进行自适应窗口选择，以提高近岸水深反演效果。它更偏“波浪遥感几何/物理反演”而非纯机器学习，但对近岸波场观测与海况重建链条仍有参考意义。**正文摘要抓取受限，因此这里保留链接与谨慎概括，不做过度展开。**
- **Suggested tags:** `nearshore-bathymetry`, `sar`, `wave-direction`, `remote-sensing`, `coastal-morphology`
- **Confidence:** medium

## 4. 抓取受限但仍建议保留的链接

下面这些条目即使部分正文或摘要抓取不完整，仍建议留在 daily 里，至少作为本周索引： 

- Nearshore bathymetry estimation from SAR imagery based on the adaptive window guided by local wave direction  
  <https://doi.org/10.1080/01431161.2026.2641156>

如果后面你想把这周内容拆成**多篇单日 detailed daily**，优先建议拆这几篇：

1. Coastal Wave Forecasts Around the Korean Peninsula
2. EOF-UViT salinity reconstruction
3. Bottom-water DO inversion and interpretability
4. Probabilistic SST forecasting with ensemble GNN
5. CT-MVP spatiotemporal missing-data imputation

## 5. 对后续研究的启发

这周的新文给了三个比较明确的信号：

- **直接面向波浪/SWH 的新文章仍然不多**，但一旦出现，方法上已经明显朝“时序分解 + 时空网络”这类更结构化的路线走。  
- **重建问题非常活跃**，尤其是“表层遥感 → 三维内部场”“长时空多变量缺测补全”“难以直接观测环境变量的间接反演”这三类。  
- **可解释性和不确定性表达正在变成加分项**，不再只是把 RMSE 压低就算结束。  

如果你要继续往自己的方向靠，我的建议是：后面可以单独盯住 **SWH forecasting、sparse reconstruction、uncertainty-aware ocean prediction、physics-aware explainable models** 这几条线，下一轮会更干净。
