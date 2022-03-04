# racoomend

superjson and babel-plugin-superjson-next libraries to be able to use Date type in getStaticProps.
Set .babelrc file properly.

Context.params.whatever to access the dynamic params of your route (passing context as parameter in getServerSideProps or getStaticMisco)

From getMiscoProps return an object { props: { The props you want to pass to your component. }}

GetServerSideProps allows you to run without getStaticPaths, for GETSTATICPROPS you need GETSTATICPATHS.

CanNot use GetServerSideProps in components that are not pages (Prisma can not be used in the browser)