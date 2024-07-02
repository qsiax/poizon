<script>
  import { page } from '$app/stores'

  import "../app.scss";
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<Header />
  <slot />
<Footer />
