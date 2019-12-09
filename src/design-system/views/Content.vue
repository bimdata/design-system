<template>
  <div class="components">
    <main>
      <div class="content">
        <h1>{{ $route.name }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi deleniti nemo debitis temporibus dolores, distinctio nam, sed eligendi adipisci enim earum molestiae vero! Consequuntur possimus libero nam perspiciatis placeat?</p>

        <div class="content-box">
          <div class="bimdata-box" v-for="children in $store.state[$route.name]" :key="children.id">
            <router-link :to="children.title" append>
              <div class="bimdata-box__content">
                <h2>{{ children.title }}</h2>
                <p>{{ children.text }}</p>
                <!-- <BIMDataButton class="bimdata-btn bimdata-btn__ghost">
                  {{ children.btn }}
                  <BIMDataIcon class="icon-close" icon-name="close" width="11" height="11" x="13" y="23">
                    <BIMDataChevronRightIcon />
                  </BIMDataIcon>
                </BIMDataButton> -->
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>