//@tsignore

import joingroup from './[joingroup]'
// const session = { user: { email: 'adria@adriamartinez.cat' } };

describe ('Back-end: join new group', ()=> {

  test('Should add group to user groups', async ()=> {
    const mockReq = {
      method: 'GET',
      headers: {
        'X-CSRF-TOKEN':
        'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..HPVGVWgt7JzZ3UD5.KTO_AkU0mGjY1pxxoDtTWqC28QNecedAd1Iu_EA_8q3T4CAusHYuBz2_0Z_Q-btWtsKkpnph9llIZ33SxK9-iy9GDn3tyQiNvaA7HhYyy89oY1zRTMjez5N0K-B-4izw051IeiVaw4hxkXSNsz9UB9vRG69aXscggB0vXuJuKiHf0XkvRwV7opakRk2dvhcpsiw369kQsGVle_vFQj-zVT7UMpNSnLch5Bz5IIlmswTOJXUk9ezrIL00mz5Qo5t1MyU_dlHvKnylmEnC0yep1Ybgt0_1fKq4TQs78IMqh24rcpue69qlGEPMp3M63oFMXwRi69Gxr2iNiUtAi_mzlyQrVdINsFyAkscyGgbogAdB5wWyvszGzR-V.oh-11PWSdLcEvjQJ-msnrw',
      },
      query: { joingroup: 'b5c89d73-ac98-4a0e-a791-b5d5ef2e52b6' },
    };

    const json = jest.fn();
    const redirect = jest.fn();
    const status = jest.fn(()=>{
      return {
        json,
        redirect
      }
    });

      const mockRes = {json, redirect, status};

      await joingroup(mockReq, mockRes);
      console.log(json.mock)
      console.log(redirect.mock)
      console.log(status.mock)
  })

})