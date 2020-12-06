import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';


import NewsItem from './NewsItem.js';

import Background from './haber.png';

const App = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={Background} style={{ resizeMode: 'cover' }}>
        <ScrollView>
          <NewsItem type='Teknoloji' title="iPhone 12 ve iPhone 12 Pro fiyatları" description="iPhone 12 64 GB: 10.999 TL, iPhone 12 128 GB: 11.499 TL " />
          <NewsItem type='Teknoloji' title="Siber Saldırılar" description="Bu yıl Türkiye'de engellenen siber saldırı sayısı 102 bini aştı" />
          <NewsItem type='Teknoloji' title="Siber Suçlular" description="Siber suçlular saldırılarını 'bulut' ile hızlandırıyor" />
          <NewsItem type='Magazin' title="Hacı Sabancı" description="Sabancı'nın takipçisi, kendisinin ve kardeşi Hakan Sabancı'nın adını taşıyan iki web sitesinin domain ve hosting hakları için 100.000 dolar istedi." />
          <NewsItem type='Magazin' title="OKtay Kaynarca" description="Adamların 50 tane suç dosyası var. Onlar profesyonel, biz onlarla başa çıkamayız. Tutuklandılar, mahkemeleri devam ediyor, şeklinde konuştu." />
          <NewsItem type='Magazin' title="Reynmen" description="Reynmen, yeni şarkısının klibi için kesenin ağzını açtı" />
          <NewsItem type='Siyasi' title="CHP'li Öztrak" description="Asgari ücret, 3 bin 100 liradan başlamalı" />
          <NewsItem type='Siyasi' title="Erdoğan" description="İftira ile karşı karşıyayız" />
          <NewsItem type='Siyasi' title="TBMM'de bütçe maratonu başlıyor" description="TBMM Genel Kurulu'nda, yarın başlayacak 'bütçe maratonu' 18 Aralık’ta tamamlanacak. Bütçe görüşmelerinde, Covid-19 tedbirleri kapsamında alınan önlemler uygulanacak" />
          <NewsItem type='Spor' title="Hagi'den yıllar sonra gelen itiraf!." description="Dayım bana dayanamadı." />
          <NewsItem type='Spor' title="Paris Saint-Germain" description="2016 yılında Real Madrid'den kadrosuna kattığı Jese Rodriguez'le yollarını ayırdığını duyurdu.." />
          <NewsItem type='Spor' title="Abdülkadir Ömür ve Uğurcan Çakır'a takip. " description="Teklifler sezon sonu gelecek.." />
          <NewsItem type='Sağlık' title="Sakın Tüketmeyin! " description="Yağlı yiyecekler sakın tüketmeyin." />
          <NewsItem type='Sağlık' title="B12 vitamini!" description="Bağırsakların çalışması için etkin olan B12 vitamini eksilince bu çalışma ya yavaşlar ya da hızlı çalışır" />
          <NewsItem type='Sağlık' title="Karaciğer yağlanmasının ciltte belirtileri" description="Karaciğer yağlanması ciltte kaşıntı, kızarıklık ve pullanma yapar mı?" />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};



export default App;