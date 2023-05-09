import React from "react";
import css from '../feedback.module.css'

export const Title = ({ title, children }) => (
  <section>
    <h2 className = { css.tytle_feedback }>{title}</h2>
    {children}
  </section>
);
 