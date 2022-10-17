<template>
  <div class="author">
    <a class="flex--row row--middle--center" href="https://github.com/sponsors/ahmetilhan24"
      ><strong>Destek Ol</strong>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#FFC3D4"
            stroke="#FF346E"
            stroke-width="1.5"
            d="M11.4697 5.24605L12 5.77637L12.5303 5.24605C14.5251 3.25131 17.7592 3.25132 19.7539 5.24606C21.7487 7.24081 21.7487 10.4749 19.7539 12.4697L12.8839 19.3398C12.3958 19.8279 11.6043 19.8279 11.1161 19.3398L4.24607 12.4697C2.25132 10.4749 2.25132 7.24081 4.24607 5.24606C6.24081 3.25132 9.47493 3.25131 11.4697 5.24605Z"
          /></svg></strong
    ></a>
  </div>
</template>
<style lang="scss" scoped>
.author {
  font-weight: normal;
  font-size: 13px;
  padding: 8px 0;
  a {
    svg {
      width: 16px;
      margin-left: 4px;
    }
  }
  @include small-device {
    font-size: 12px;
  }
}
</style>
