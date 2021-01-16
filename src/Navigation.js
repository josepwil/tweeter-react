import React from 'react'

export const Navigation = () => {
  return(
    <nav>
      <span class="nav--text">tweeter</span>

      <div class="btn btn--scroll">
        <a href="#" class="btn__text btn--borderless" title="Compose Tweet">
          <span class="btn--bold">Write</span> a new tweet
          <br />
          <i class="btn__icon fas fa-angle-double-down"></i>
        </a>
      </div>
    </nav>
  )
}