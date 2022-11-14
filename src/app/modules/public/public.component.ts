import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portfolio } from './../../models/portfolio';
import { Service } from './../../models/service';
import { Item } from './components/main-menu/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  social = [
    new Item('LinkedIn', 'https://www.linkedin.com/in/regivaldo-silva/', 'linkedin.svg', true),
    new Item('Codepen', 'https://codepen.io/regivaldo', 'codepen.svg', true),
    new Item('Github', 'https://github.com/regivaldo', 'github.svg', true),
    new Item('Facebook', 'https://www.facebook.com/regivaldorfs/', 'facebook.svg', true),
    new Item('Instagram', 'https://www.instagram.com/regivaldo.rfs/', 'instagram.svg', true),
    new Item('Twitter', 'https://twitter.com/regivaldorfs', 'twitter.svg', true),
    new Item('WhatsApp', 'https://api.whatsapp.com/send?phone=5519996995631&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.', 'whatsapp.svg', true)
  ];

  menu = [
    new Item('Início', 'inicio', '', true),
    new Item('Sobre', 'sobre', '', true),
    new Item('Serviços', 'servicos', '', true),
    new Item('Portfólio', 'portfolio', '', true),
    new Item('Contato', 'contato', '', true)
  ];

  services = [
    new Service(
      'Websites',
      'Aumente a visibilidade dos seus serviços ou produtos através de um website intuítivo, responsível, acessível e gerenciável. O desenvolvimento pode variar desde o uso de ferramentas como Wordpress ao desenvolvimento completo da solução.',
      'me.png',
      ''
    ),
    new Service(
      'Landingpage',
      'Tem um produto ou serviço que precisa de um destaque? Uma landingpage pode ser a solução ideal, focado apenas no produto trará visibilidade e aumentará a retenção dos seus clientes, aumentando assim o engajamento.',
      'me.png',
      ''
    ),
    new Service(
      'Sistemas',
      'Para controles complexos, assim como gerenciamento, um sistema se faz ideal. Diferente de um website, o sistema possuí controles de acessos, lógicas para facilitar seu dia a dia e tornar seus processos mais ágeis e práticos.',
      'me.png',
      ''
    ),
    new Service(
      'Ferramentas',
      'Ferramenta são pequenos softwares que realizam ações individuais, como gerar uma imagem com marca d\'água ou realizar um recorte específico na imagem. Ferramentas podem ser construídas para um site ou sistema específico com objetivo de complementar.',
      'me.png',
      ''
    ),
    new Service(
      'Aplicativos',
      'Muitas vezes seu cliente precisa de acessos imediatos, consultar um estoque ou mesmo uma funcionalidade de um sistema que possuí. O aplicativo torna este um processo mais fácil, já que no celular seu cliente pode acessar as funcionalidades essenciais do sistema.',
      'me.png',
      ''
    ),
    new Service(
      'Consultoria',
      'Você possuí um sistema, site ou aplicativo e precisa de ajuda técnica para resolução de um problema específico? Também ofereço o serviço de consultoria, onde posso analisar o problema e te propor as soluções para a correção dele.',
      'me.png',
      ''
    )
  ];

  portfolio = [
    new Portfolio(
      'escoteiros-app',
      'Escoteiros.app',
      'Sistema desenvolvido com Angular, tendo no backend Next JS com Maria DB. O sistema consiste em uma ferramenta geradora de formulário que todo escoteiro precisa preencher para pedidos de especialidades.',
      'https://gemr.com.com/'),
    new Portfolio(
      'gemr',
      'Grupo Escoteiro Marechal Rondon',
      'Site desenvolvido com Wordpress, tendo customização de template e aplicação de plugins para segurança.',
      'https://gemr.com.com/'),
    new Portfolio(
      'alem-do-passaporte',
      'Além do Passaporte',
      'Site desenvolvido com Wordpress, tendo customização de template e aplicação de plugins para segurança. Aplicado também integração com Paypal e multiplos idiomas.',
      'https://alemdopassaporte.com/'),
    new Portfolio(
      'poder-feminino-em-equilibrio',
      'Poder Feminino em Equilíbrio',
      'Site densenvolvido com Wordpress, tendo customização de template, desenvolvimento de plugins para ferramental de controle interno e diário para usuário final.',
      'https://poderfemininoemequilibrio.com.br/')
  ];

  constructor(private http: HttpClient) {}

  showMessage = false;

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const form = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post('https://formspree.io/f/xoqbyzzl',
        {
          name: form.name,
          email: form.email,
          replyto: form.email,
          subject: form.subject,
          message: form.message
        },
        { 'headers': headers }
      ).subscribe(
        response => {
          this.showMessage = true;
          contactForm.reset();
          console.log(response);
        }
      );
    }
  }
}
