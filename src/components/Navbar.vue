<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><i class="fas fa-headset"></i> Games Opinion</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <router-link  class="nav-link" :to="{name: 'home'}"><i class="fas fa-home"></i> Home</router-link>
            <router-link class="nav-link" :to="{name: 'opiniones'}"><i class="fas fa-comments"></i> Opiniones</router-link>
            <router-link class="nav-link" :to="{name: 'administracion'}"><i class="fas fa-users-cog"></i> Administración</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>