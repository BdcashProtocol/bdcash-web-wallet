<template>
  <div class="page">
    <AssetDash :chain="$route.params.chain" />
  </div>
</template>

<script>
  let BDCashCore = require("@bdcash-protocol/core")
  import User from '../../libs/user'
  import AssetDash from '../../components/AssetDash'

  export default {
    name: 'Dashboard',
    components: { AssetDash },
    data() {
      return {
        bdcash: new BDCashCore(true),
        isLogging: true,
        isLoading: true
      };
    },
    async mounted() {
      const app = this;
      app.bdcash.staticnodes = true
      app.wallet = await User.auth()
      if(app.wallet !== false){
        app.configs = await User.configs()
        app.ticker = 'BDCASH'
      }
    },
  };
</script>