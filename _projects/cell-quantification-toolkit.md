---
layout: page
title: Cell Quantification Toolkit
description: A Fiji plugin for automated image quantification
img: assets/img/cqt-prob_3.jpg
importance: 1
category: ongoing
published: true
---
I am currently developing a plugin for ImageJ/FIJI that orchestrates various image quantification tasks with a ROI-specific, project-based approach and a GUI. Currently, I have implemented a workflow for c-Fos+ cell counting in DAB stained bright-field images. It utilizes [Ilastik](https://www.ilastik.org/) pixel classification and object classification models for the ML portion of the workflow. 

See the project repository [on Github](https://github.com/mrallred/Cell-Quantification-Toolkit).

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/img/cqt-prob_1.jpg" class="img-fluid rounded z-depth-1" alt="probabilities">
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/img/cqt-prob_2.jpg" class="img-fluid rounded z-depth-1" alt="probabilities">
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/img/cqt-prob_3.jpg" class="img-fluid rounded z-depth-1" alt="probabilities">
  </div>
</div>