# racoomend

superjson and babel-plugin-superjson-next libraries to be able to use Date type in getStaticProps.
Set .babelrc file properly.

Context.params.whatever to access the dynamic params of your route (passing context as parameter in getServerSideProps or getStaticMisco)

From getMiscoProps return an object { props: { The props you want to pass to your component. }}

Create a type for each component props.

GetServerSideProps allows you to run without getStaticPaths, for GETSTATICPROPS you need GETSTATICPATHS.

CanNot use GetServerSideProps in components that are not pages (Prisma can not be used in the browser)

Two brackets around a spread route [[...id]] includes the index to the route, with just one square bracker index is not included.