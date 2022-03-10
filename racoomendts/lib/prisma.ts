import { PrismaClient } from '@prisma/client';


// *PRODUCTION ONLY
// let prisma: PrismaClient;
// prisma = new PrismaClient();

// *DEVELOPMENT ONLY
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;