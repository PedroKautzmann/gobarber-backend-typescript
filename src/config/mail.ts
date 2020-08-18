interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  /**
   *  Aqui vão as credenciais cadastradas no amazon SES,
   *  quando for para produção, por enquanto está mockado.
   */
  defaults: {
    from: {
      email: 'pedro@mail.com',
      name: 'Pedro Kautzmann',
    },
  },
} as IMailConfig;
