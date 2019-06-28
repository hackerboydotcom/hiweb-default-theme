<template>
  <div class="footer-container mt-5">

    <div class="footer__back-to-top text-center">
      <strong @click="scrollToTop" style="cursor: pointer;">Back To Top <i class="fas fa-chevron-up ml-2"></i></strong>
    </div>

    <div id="footer" class="footer pt-5 pb-2">
      <div class="container">
        <div class="row">

          <div class="col-12 mb-5">
            <img :src="logo" style="width: 150px;" />
          </div>

          <div class="col-md-3 col-6">
            <strong class="footer__heading">{{ $hiwebBase.options.getPageOptions('global')['footer-menu-1-title'].value }}</strong>

            <div class="footer__menu">

              <template v-if="menuLinks1">
                <template v-for="menuLink in menuLinks1.document.data">
                  <router-link v-if="menuLink.attributes.link_type !== 'custom'" :key="menuLink.id" class="mr-3" :to="$hiwebBase.router.routeTo(menuLink.attributes.resource_id ? menuLinks1.findIncludedResource(menuLink.attributes.link_type, menuLink.attributes.resource_id) : menuLink)" :title="menuLink.attributes.title">
                    {{ menuLink.attributes.text }}
                  </router-link>
                  <a v-else :href="menuLink.attributes.link" target="_blank" :title="menuLink.attributes.title">{{ menuLink.attributes.text }}</a>
                </template>
              </template>

              <template v-else>
                <Loader v-if="isLoadingMenu1" />
                <template v-else>

                  <!-- Default links -->
                  <router-link class="mr-3" to="/pages/about-us">About us</router-link>
                  <router-link class="mr-3" to="/pages/contact-us">Contact us</router-link>

                </template>
              </template>
                  
            </div>

          </div>
          <div class="col-md-3 col-6">
            <strong class="footer__heading">{{ $hiwebBase.options.getPageOptions('global')['footer-menu-2-title'].value }}</strong>

            <div class="footer__menu">

              <template v-if="menuLinks2">
                <template v-for="menuLink in menuLinks2.document.data">
                  <router-link v-if="menuLink.attributes.link_type !== 'custom'" :key="menuLink.id" class="mr-3" :to="$hiwebBase.router.routeTo(menuLink.attributes.resource_id ? menuLinks2.findIncludedResource(menuLink.attributes.link_type, menuLink.attributes.resource_id) : menuLink)" :title="menuLink.attributes.title">
                    {{ menuLink.attributes.text }}
                  </router-link>
                  <a v-else :href="menuLink.attributes.link" target="_blank" :title="menuLink.attributes.title">{{ menuLink.attributes.text }}</a>
                </template>
              </template>

              <template v-else>
                <Loader v-if="isLoadingMenu1" />
                <template v-else>

                  <!-- Default links -->
                  <router-link class="mr-3" to="/pages/about-us">About us</router-link>
                  <router-link class="mr-3" to="/pages/contact-us">Contact us</router-link>

                </template>
              </template>

            </div>

          </div>
          <div class="col-md-3 footer__thirt-column">

            <strong class="footer__heading d-none d-sm-none d-md-block">{{ $hiwebBase.options.getPageOptions('global')['footer-column-3-title'].value }}</strong>
            <hr class="d-block d-sm-block d-md-none" />
            <div v-html="$hiwebBase.options.getPageOptions('global')['footer-column-3-content'].value"></div>

          </div>
          <div class="col-md-3 text-right pt-4">

            <div class="text-center">
              <div style="display: block; width: 100%; margin-bottom: 10px;">
                <a class="d-b" href="https://www.bbb.org/" target="_blank">
                  <img src="https://cdn.32pt.com/public/assets/7c1d2f90c470db3533f1dc7bdba0a6b8.svg" name="bbb" alt="bbb" />
                </a>
              </div>
              <div style="display: inline-block; width: 20%">
                <img alt="Visa" style="height:24px;width:37px;margin:4px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iNjBweCIgdmlld0JveD0iMCAwIDEwMCA2MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDIgKDM2NzgxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5WaXNhLWRhcms8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGF5bWVudC1iYWRnZS1zZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEYXJrLVBheW1lbnQtYmFkZ2VzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMwLjAwMDAwMCwgLTE2NC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IlZpc2EtZGFyayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwLjAwMDAwMCwgMTY0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI2MzM3QSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRmlsbC0zIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjQxLjQ4OTk5MDggMzkuNTQ2NzYwNiA0NC41NjQ3MjgxIDIwLjQ3MjY3NjEgNDkuNDc5NTg1MyAyMC40NzI2NzYxIDQ2LjQwNTEyOSAzOS41NDY3NjA2IDQxLjQ4OTk5MDggMzkuNTQ2NzYwNiI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NC4yMzI4NzEsMjAuOTQwODQ1MSBDNjMuMjYxMDg3NiwyMC41NTgwMjgyIDYxLjczMjcxNDMsMjAuMTQwNTYzNCA1OS44Mjg3ODM0LDIwLjE0MDU2MzQgQzU0Ljk2OTU4NTMsMjAuMTQwNTYzNCA1MS41NDkwODc2LDIyLjcyOTAxNDEgNTEuNTIwNjk1OSwyNi40MzU0OTMgQzUxLjQ4OTc3NDIsMjkuMTc3MTgzMSA1My45NjE1MzkyLDMwLjcwNjE5NzIgNTUuODI0OTkwOCwzMS42MTc0NjQ4IEM1Ny43NDAxNjU5LDMyLjU1MTU0OTMgNTguMzgzNjE3NSwzMy4xNDkyOTU4IDU4LjM3NjAyNzYsMzMuOTg0NTA3IEM1OC4zNjI4MTU3LDM1LjI2MTk3MTggNTYuODQ3MzczMywzNS44NDczMjM5IDU1LjQzNDI1MzUsMzUuODQ3MzIzOSBDNTMuNDY2NTExNSwzNS44NDczMjM5IDUyLjQyMTA3ODMsMzUuNTU5MTU0OSA1MC44MDQ3MTg5LDM0Ljg0NzA0MjMgTDUwLjE3MjUxMTUsMzQuNTQzMzgwMyBMNDkuNDg1MjA3NCwzOC44MTI5NTc3IEM1MC42MzEyNzY1LDM5LjM0NDIyNTQgNTIuNzU1ODc1NiwzOS44MDUzNTIxIDU0Ljk2MDg3MSwzOS44Mjk1Nzc1IEM2MC4xMjUwNjkxLDM5LjgyOTU3NzUgNjMuNDgwNjMxMywzNy4yNzIzOTQ0IDYzLjUxOTk4NjIsMzMuMzE0MzY2MiBDNjMuNTM3Njk1OSwzMS4xNDAyODE3IDYyLjIyODAyMywyOS40OTIzOTQ0IDU5LjM5MTY2MzYsMjguMTMxODMxIEM1Ny42NzQxMDYsMjcuMjQ3MzIzOSA1Ni42MTk5NTg1LDI2LjY2MTQwODUgNTYuNjMyMDQ2MSwyNS43NjYxOTcyIEM1Ni42MzMxNzA1LDI0Ljk3MzUyMTEgNTcuNTIyNTg5OSwyNC4xMjQ3ODg3IDU5LjQ0NzYwMzcsMjQuMTI0Nzg4NyBDNjEuMDU1MjQ4OCwyNC4wOTg4NzMyIDYyLjIxOTAyNzYsMjQuNDcwMTQwOCA2My4xMjU4NzU2LDI0Ljg1Nzc0NjUgTDYzLjU2NzIxMiwyNS4wNzU3NzQ2IEw2NC4yMzI4NzEsMjAuOTQwODQ1MSIgaWQ9IkZpbGwtNCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcwLjc3NzI5OTUsMzIuNzg0MjI1NCBDNzEuMTg0NjIyMSwzMS42ODc4ODczIDcyLjczNTIwMjgsMjcuNDUyNjc2MSA3Mi43MzUyMDI4LDI3LjQ1MjY3NjEgQzcyLjcwNjUzLDI3LjUwMzA5ODYgNzMuMTQwMjc2NSwyNi4zNDc4ODczIDczLjM4ODQ5MzEsMjUuNjMyOTU3NyBMNzMuNzIwMTk4MiwyNy4yNzgwMjgyIEM3My43MjAxOTgyLDI3LjI3ODAyODIgNzQuNjYzMzA4OCwzMS44MzA3MDQyIDc0Ljg1NzU1MywzMi43ODQyMjU0IEw3MC43NzcyOTk1LDMyLjc4NDIyNTQgTDcwLjc3NzI5OTUsMzIuNzg0MjI1NCBaIE03Ni44NDA3NTU4LDIwLjQ5MjExMjcgTDczLjA0MjQ1MTYsMjAuNDkyMTEyNyBDNzEuODY0MzM2NCwyMC40OTIxMTI3IDcwLjk4MjUwNjksMjAuODI5NTc3NSA3MC40NjYzOTYzLDIyLjA3MzIzOTQgTDYzLjE2NzQ3OTMsMzkuNTUzNTIxMSBMNjguMzI5NzA5NywzOS41NTM1MjExIEM2OC4zMjk3MDk3LDM5LjU1MzUyMTEgNjkuMTcxOTAzMiwzNy4yMDE5NzE4IDY5LjM2MzA1NTMsMzYuNjg1OTE1NSBDNjkuOTI2MTEwNiwzNi42ODU5MTU1IDc0Ljk0MjE2NTksMzYuNjk1Nzc0NiA3NS42NTgxNDI5LDM2LjY5NTc3NDYgQzc1LjgwNTQ0MjQsMzcuMzYxNDA4NSA3Ni4yNTY2MTc1LDM5LjU1MzUyMTEgNzYuMjU2NjE3NSwzOS41NTM1MjExIEw4MC44MTg0MDU1LDM5LjU1MzUyMTEgTDc2Ljg0MDc1NTgsMjAuNDkyMTEyNyBMNzYuODQwNzU1OCwyMC40OTIxMTI3IFoiIGlkPSJGaWxsLTUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNy4zNjY3MjgxLDIwLjQ4ODczMjQgTDMyLjU1NjE2MTMsMzMuNDkyNjc2MSBMMzIuMDQwODk0LDMwLjg0OTI5NTggQzMxLjE0NDQ0NywyNy44MDM2NjIgMjguMzUzOTA3OCwyNC41MDI1MzUyIDI1LjIzMjUwNjksMjIuODQ4NDUwNyBMMjkuNjMzNTAyMywzOS41MzAxNDA4IEwzNC44MzUwODc2LDM5LjUyNzA0MjMgTDQyLjU3NTA1OTksMjAuNDg4NzMyNCBMMzcuMzY2NzI4MSwyMC40ODg3MzI0IiBpZD0iRmlsbC02IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjguMDkwNTExNSwyMC40NzU3NzQ2IEwyMC4xNjQ3MjgxLDIwLjQ3NTc3NDYgTDIwLjA5OTUxMTUsMjAuODcwOTg1OSBDMjYuMjY2Njk1OSwyMi40NTA5ODU5IDMwLjM0NzIzMDQsMjYuMjY0Nzg4NyAzMi4wNDA4OTQsMzAuODQ5Mjk1OCBMMzAuMzE4NTU3NiwyMi4wODUwNzA0IEMzMC4wMjE0Mjg2LDIwLjg3NjMzOCAyOS4xNTc4NzEsMjAuNTE4MDI4MiAyOC4wOTA1MTE1LDIwLjQ3NTc3NDYiIGlkPSJGaWxsLTciIGZpbGw9IiNFRDk4MkQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
              </div>
              <div style="display: inline-block; width: 20%">
                <img alt="Mastercard" style="height:24px;width:37px;margin:4px;" src="https://cdn.32pt.com/public/assets/78038dae1f004aeac89269668b143f30.svg" />
              </div>
              <div style="display: inline-block; width: 20%">
                <img alt="American Express" style="height:24px;width:37px;margin:4px;" src="https://cdn.32pt.com/public/assets/27568a4c1cd20ed4fdc95f39155b7b9a.svg" />
              </div>
              <div style="display: inline-block; width: 20%">
                <img alt="Discover" style="height:24px;width:37px;margin:4px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iNjBweCIgdmlld0JveD0iMCAwIDEwMCA2MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDIgKDM2NzgxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5EaXNjb3Zlci1kYXJrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgcng9IjQiPjwvcmVjdD4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8bWFzayBpZD0ibWFzay00IiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNMjQuMTE1NDE2OCw2MCBMOTYuMDAwMzY0OCw2MCBDOTguMjA5MzAyMyw2MCAxMDAsNTguMjEyODM5NyAxMDAsNTYuMDA1MzAyNyBMMTAwLDMzLjY5ODA2ODYgQzEwMCwzMy42OTgwNjg2IDczLjE5OTUzNDEsNTEuODY3OTk2OCAyNC4xMTU0MTY4LDYwIFoiIGlkPSJwYXRoLTUiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYXltZW50LWJhZGdlLXNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstUGF5bWVudC1iYWRnZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTAuMDAwMDAwLCAtMjY0LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iRGlzY292ZXItZGFyayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjEwLjAwMDAwMCwgMjY0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWFzayIgc3Ryb2tlPSIjRTY3NzJGIiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgbWFzaz0idXJsKCNtYXNrLTQpIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTUiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSIjRTc3NzJGIiB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yODg1ODM0LDI5LjgyMjAxNTEgQzE3LjUzNzg2OTksMzAuNDYzOTA5NSAxNi41ODIyMDI3LDMwLjc0NDU5NzggMTUuMDUzOTgxMywzMC43NDQ1OTc4IEwxNC40MTk4NDcsMzAuNzQ0NTk3OCBMMTQuNDE5ODQ3LDIzLjA4NDU5NyBMMTUuMDUzOTgxMywyMy4wODQ1OTcgQzE2LjU4MjIwMjcsMjMuMDg0NTk3IDE3LjUwMTIwMzksMjMuMzQ2MzkyOCAxOC4yODg1ODM0LDI0LjAyMDIyNDYgQzE5LjEwMTM0NzEsMjQuNzE2NTQ3NCAxOS41ODk3NTc0LDI1Ljc5MDcxOTggMTkuNTg5NzU3NCwyNi45MDE3Nzc1IEMxOS41ODk3NTc0LDI4LjAxODIzMzEgMTkuMTAxMzQ3MSwyOS4xMzA2NDAzIDE4LjI4ODU4MzQsMjkuODIyMDE1MSBMMTguMjg4NTgzNCwyOS44MjIwMTUxIFogTTE1LjUyNzM0OTIsMjEuMTIyNDc4MSBMMTIuMDU3NzA4NCwyMS4xMjI0NzgxIEwxMi4wNTc3MDg0LDMyLjcwNzYxNjQgTDE1LjUwNjE5NTcsMzIuNzA3NjE2NCBDMTcuMzQxMzc3NiwzMi43MDc2MTY0IDE4LjY2NjA1NTUsMzIuMjg5NzMyNyAxOS44MjcxNDY1LDMxLjM2NzU5OTggQzIxLjIwNjM1MzQsMzAuMjc1NDM0NiAyMi4wMjQ3NTgsMjguNjI2MzkxIDIyLjAyNDc1OCwyNi45MTc5NzExIEMyMi4wMjQ3NTgsMjMuNDk3OTgyNSAxOS4zNTQ3MTg4LDIxLjEyMjQ3ODEgMTUuNTI3MzQ5MiwyMS4xMjI0NzgxIEwxNS41MjczNDkyLDIxLjEyMjQ3ODEgWiIgaWQ9IkZpbGwtMTMiIGZpbGw9IiMxQTE5MTgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTE0IiBmaWxsPSIjMUExOTE4IiBwb2ludHM9IjIzLjExMzkyNzIgMjEuMTIyNDc4MSAyNS40NjY2NjQyIDIxLjEyMjQ3ODEgMjUuNDY2NjY0MiAzMi43MDc2MTY0IDIzLjExMzkyNzIgMzIuNzA3NjE2NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMxLjI0NDM4NDcsMjUuNTYyNjYwNiBDMjkuODI0MjgxLDI1LjA2NDI1OSAyOS40MDkyMDI4LDI0LjczMjI5MTEgMjkuNDA5MjAyOCwyNC4xMDYxNDA0IEMyOS40MDkyMDI4LDIzLjM3ODMzMDEgMzAuMTUwOTg0OCwyMi44MjYzOTk4IDMxLjE3MTA1MjYsMjIuODI2Mzk5OCBDMzEuODc4MDQ4OSwyMi44MjYzOTk4IDMyLjQ2MDQ3NDcsMjMuMDk3MTkyIDMzLjA4MDk3NjgsMjMuNzU4ODc4NiBMMzQuMzA5Mjg4OCwyMi4yMTY4OTI1IEMzMy4yOTQzOTE5LDIxLjM2MjIzMjcgMzIuMDc5NzEyMSwyMC45Mjk1MDQ5IDMwLjc1NTUwNDIsMjAuOTI5NTA0OSBDMjguNjEyODkxOCwyMC45Mjk1MDQ5IDI2Ljk3OTg0MzEsMjIuMzU1ODg3MSAyNi45Nzk4NDMxLDI0LjI0MTk4NjMgQzI2Ljk3OTg0MzEsMjUuODQzMzQ4OSAyNy43MzkwMTgsMjYuNjU1NzI1NSAyOS45NTQ0OTI1LDI3LjQyNzE2ODQgQzMwLjg4MDU0NDgsMjcuNzM1Mjk1NyAzMS4zNTEwOTIyLDI3Ljk0NTgxMTkgMzEuNTg5NDIxNCwyOC4wODg0MDUyIEMzMi4wNjEzNzkxLDI4LjM4MDMzOSAzMi4yOTY0MTc3LDI4Ljc5ODY3MjQgMzIuMjk2NDE3NywyOS4yODIyMjk5IEMzMi4yOTY0MTc3LDMwLjIyNDYwNDggMzEuNTE2MDg5NCwzMC45MTczMjkxIDMwLjQ2MTIzNTgsMzAuOTE3MzI5MSBDMjkuMzM4MjIxMSwzMC45MTczMjkxIDI4LjQyOTU2MTYsMzAuMzc5MzQzMiAyNy44ODU2ODIxLDI5LjM2OTA0NTQgTDI2LjM2MzU3MTgsMzAuNzc5NjgzOCBDMjcuNDUxODAwOCwzMi4zMDU0NzY1IDI4Ljc1NjI2NTQsMzIuOTg3NDA1IDMwLjU1MzM3MSwzMi45ODc0MDUgQzMzLjAwNDM1NDIsMzIuOTg3NDA1IDM0LjczMTQxODMsMzEuNDE3MDgwMSAzNC43MzE0MTgzLDI5LjE4MDU3MDQgQzM0LjczMTQxODMsMjcuMzM3NjU0IDMzLjkzMDQwNjUsMjYuNTAyMzM2NSAzMS4yNDQzODQ3LDI1LjU2MjY2MDYiIGlkPSJGaWxsLTE1IiBmaWxsPSIjMUExOTE4Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzUuNDczMjAwMywyNi45MTc5NzExIEMzNS40NzMyMDAzLDMwLjMyNDkxNDkgMzguMjY3ODEsMzIuOTY0OTE0IDQxLjg2NTMxMTgsMzIuOTY0OTE0IEM0Mi44Nzk3Mzg3LDMyLjk2NDkxNCA0My43NDkzODE4LDMyLjc3MzI5MDIgNDQuODIwMjE3OSwzMi4yODk3MzI3IEw0NC44MjAyMTc5LDI5LjYyNzI0MjYgQzQzLjg3Mzk1MjMsMzAuNTM3MjMwNCA0My4wNDMzMjU2LDMwLjg5NjE4NzUgNDEuOTY4NzI4OCwzMC44OTYxODc1IEMzOS41OTE1NDc4LDMwLjg5NjE4NzUgMzcuOTA3NzMwOCwyOS4yNTAyOTI3IDM3LjkwNzczMDgsMjYuOTAxNzc3NSBDMzcuOTA3NzMwOCwyNC42ODI4MTA4IDM5LjY0NjA3NjgsMjIuOTI0OTEwNiA0MS44NjUzMTE4LDIyLjkyNDkxMDYgQzQyLjk4NTAzNiwyMi45MjQ5MTA2IDQzLjg0MDU3NjgsMjMuMzA0NTU5NSA0NC44MjAyMTc5LDI0LjIyODA0MTkgTDQ0LjgyMDIxNzksMjEuNTY4NzAwNSBDNDMuNzg1NTc3NywyMS4wNjgwNDk4IDQyLjkzNjYxODEsMjAuODYwNjgyMyA0MS45MTM3Mjk4LDIwLjg2MDY4MjMgQzM4LjMzNjkxMTQsMjAuODYwNjgyMyAzNS40NzMyMDAzLDIzLjU1MjQxMDggMzUuNDczMjAwMywyNi45MTc5NzExIiBpZD0iRmlsbC0xNiIgZmlsbD0iIzFBMTkxOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJGaWxsLTE3IiBmaWxsPSIjMUExOTE4IiBwb2ludHM9IjYzLjk0ODYwNDYgMjguOTAwMzMyIDYwLjcyMDExMzUgMjEuMTIyNDc4MSA1OC4xNDU5NyAyMS4xMjI0NzgxIDYzLjI3ODI3NDMgMzMgNjQuNTQ0MTkyNiAzMyA2OS43NzYxNTMyIDIxLjEyMjQ3ODEgNjcuMjIyMjIzMSAyMS4xMjI0NzgxIDYzLjk0ODYwNDYgMjguOTAwMzMyIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJGaWxsLTE4IiBmaWxsPSIjMUExOTE4IiBwb2ludHM9IjcwLjg0NzQ1OTUgMzIuNzA3NjE2NCA3Ny41NDI3NzA5IDMyLjcwNzYxNjQgNzcuNTQyNzcwOSAzMC43NDQ1OTc4IDczLjIwOTU5OCAzMC43NDQ1OTc4IDczLjIwOTU5OCAyNy42MTc0NDI2IDc3LjM3ODI0MzggMjcuNjE3NDQyNiA3Ny4zNzgyNDM4IDI1LjY1NDg3MzkgNzMuMjA5NTk4IDI1LjY1NDg3MzkgNzMuMjA5NTk4IDIzLjA4NDU5NyA3Ny41NDI3NzA5IDIzLjA4NDU5NyA3Ny41NDI3NzA5IDIxLjEyMjQ3ODEgNzAuODQ3NDU5NSAyMS4xMjI0NzgxIDcwLjg0NzQ1OTUgMzIuNzA3NjE2NCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04Mi4xNTQyMjk0LDI2LjQ0OTcwNzUgTDgxLjQ2ODg1NjcsMjYuNDQ5NzA3NSBMODEuNDY4ODU2NywyMi45NDU2MDI0IEw4Mi4xOTI3NzU4LDIyLjk0NTYwMjQgQzgzLjY2Nzg3ODQsMjIuOTQ1NjAyNCA4NC40NTgwNzg0LDIzLjUzODAxNjYgODQuNDU4MDc4NCwyNC42NjY2MTczIEM4NC40NTgwNzg0LDI1LjgyNjI1NTcgODMuNjY3ODc4NCwyNi40NDk3MDc1IDgyLjE1NDIyOTQsMjYuNDQ5NzA3NSBMODIuMTU0MjI5NCwyNi40NDk3MDc1IFogTTg2Ljg4OTMxODQsMjQuNTQwNjY3NCBDODYuODg5MzE4NCwyMi4zNzExODEgODUuMzM0MzAyNiwyMS4xMjI0NzgxIDgyLjYwODMyNDEsMjEuMTIyNDc4MSBMNzkuMTAxNTQ3MywyMS4xMjI0NzgxIEw3OS4xMDE1NDczLDMyLjcwNzYxNjQgTDgxLjQ2ODg1NjcsMzIuNzA3NjE2NCBMODEuNDY4ODU2NywyOC4wNDk3MjA2IEw4MS43NzU4MTcyLDI4LjA0OTcyMDYgTDg1LjAzNzY4MzgsMzIuNzA3NjE2NCBMODcuOTQyMjkxNiwzMi43MDc2MTY0IEw4NC4xMzMyNTUsMjcuODI0ODEwMSBDODUuOTEzNDM3OCwyNy40NzY2NDg3IDg2Ljg4OTMxODQsMjYuMzEzNDExNyA4Ni44ODkzMTg0LDI0LjU0MDY2NzQgTDg2Ljg4OTMxODQsMjQuNTQwNjY3NCBaIiBpZD0iRmlsbC0xOSIgZmlsbD0iIzFBMTkxOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU4LjQ3ODc4NDgsMjYuOTQ0OTYwMyBDNTguNDc4Nzg0OCwzMC4yODAzODI2IDU1LjY1NDU2MDIsMzIuOTgzODA2NCA1Mi4xNjc1MjY2LDMyLjk4MzgwNjQgQzQ4LjY4MTQzMzEsMzIuOTgzODA2NCA0NS44NTY3Mzg0LDMwLjI4MDM4MjYgNDUuODU2NzM4NCwyNi45NDQ5NjAzIEM0NS44NTY3Mzg0LDIzLjYwOTA4ODMgNDguNjgxNDMzMSwyMC45MDUyMTQ2IDUyLjE2NzUyNjYsMjAuOTA1MjE0NiBDNTUuNjU0NTYwMiwyMC45MDUyMTQ2IDU4LjQ3ODc4NDgsMjMuNjA5MDg4MyA1OC40Nzg3ODQ4LDI2Ljk0NDk2MDMiIGlkPSJGaWxsLTIwIiBmaWxsPSIjRTc3NzJGIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" />
              </div>
              <div style="display: inline-block; width: 20%">
                <img alt="Paypal" style="height:24px;width:37px;margin:4px;" src="https://cdn.32pt.com/public/assets/894f545b91695a91210393a0bc3a09e7.svg" />
              </div>
            </div>

          </div>

          <div class="col-12 mt-3">
            <hr class="mb-2" />
            <small>© {{ (new Date()).getFullYear() }} {{ siteName }}</small>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/javascript">
import $ from 'jquery';
import Loader from '@/components/Loader';

export default {

  components: { Loader },

  data() {
    return {
      siteName: process.env.NODE_ENV === 'production' ? window.shop.name : '',
      logo: (process.env.NODE_ENV === 'development' || (process.env.NODE_ENV === 'production' && !window.shop.logo)) ? require('@/assets/default.png') : this.$hiwebBase.image.resize(window.shop.logo.path, 380),

      menuLinks1: null,
      isLoadingMenu1: false,

      menuLinks2: null,
      isLoadingMenu2: false,

    };
  },

  created() {

    this.loadMenus();
  
    // Live edit event
    window.addEventListener('options-updated', e => {
      this.loadMenus();
    });

    // If theme logo has value
    if (this.$hiwebBase.options.getPageOption('global', 'logo').value) {
      this.logo = this.$hiwebBase.image.resize(this.$hiwebBase.options.getPageOption('global', 'logo').value, 250);
    }

  },

  methods: {

    loadMenus() {

      // Load menus
      let menuKey1 = this.$hiwebBase.options.getPageOptions('global')['footer-menu-1'].value;

      if (menuKey1) {

        this.isLoadingMenu1 = true;

        this.$hiwebBase.api.get('menu_links', {
          menu_key: menuKey1
        }).then(response => {

          this.menuLinks1 = new this.$hiwebBase.JsonApi(response.data);
          this.isLoadingMenu1 = false;

        }).catch(e => {
          this.isLoadingMenu1 = false;
        });

      }

      let menuKey2 = this.$hiwebBase.options.getPageOptions('global')['footer-menu-2'].value;

      if (menuKey2) {

        this.isLoadingMenu2 = true;

        this.$hiwebBase.api.get('menu_links', {
          menu_key: menuKey2
        }).then(response => {

          this.menuLinks2 = new this.$hiwebBase.JsonApi(response.data);
          this.isLoadingMenu2 = false;

        }).catch(e => {
          this.isLoadingMenu2 = false;
        });

      }

    },

    scrollToTop() {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
    }

  }

}
</script>

<style type="text/css" lang="scss">
.footer__back-to-top {
  border-top: 1px solid #f0f2f3;
  padding: 15px;
}

#footer {
  background: #f7f8f9;
  color: #636e72;

  a {
    color: #636e72;
  }
  
  hr {
    border-top: 1px solid #e6e6e6;
  }

  .footer__heading {
    display: block;
    font-weight: 700;
    font-size: 16px;
    color: #2d3436;
    margin-bottom: 1.5rem !important;
  }

  .footer__menu {

    a {
      display: block;
      color: #636e72;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

  }

  .footer__thirt-column {

    @media(max-width: 768px) {
      text-align: center;
    }

  }

  .payment-icon {
    display: inline-block;
    opacity: .6;
    transition: opacity .3s;
    border-radius: 5px;
    background-color: rgba(0,0,0,.3);
    padding-bottom: 0;
    padding: 3px 5px 5px;
    margin: 3px 3px 0;
    color: rgba(255, 255, 255, 0.5);

    svg {
      fill: #e6e6e6;
      vertical-align: middle;
      height: 30px;
      width: auto !important;
    }
  }
}
</style>