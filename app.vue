<template>
  <div class="flex flex-col max-h-screen overflow-hidden bg-gradient-to-b from-green-100 to-green-200">
    <NavBar/>
    <div class="flex flex-grow overflow-hidden">
      <SideBar/>
      <div class="w-full flex flex-col overflow-hidden">
        <Inventory/>
        <BuiltSpacesSection/>
        <BlueprintsSection/>
      </div>
    </div>
  </div>
</template>