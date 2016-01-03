DELETE FROM news;
DROP TABLE news;
VACUUM;

CREATE TABLE
	news (
		url TEXT,
		headline TEXT,
		created TEXT,
		modified TEXT,
		author TEXT
	);

INSERT INTO
	news
VALUES
	(
		"php-70-packages-released",
		"PHP 7.0 パッケージがリリースされました",
		"2016-01-03",
		"2016-01-03",
		"Pierre Schmitz"
	),
	(
		"dropping-plasma-4",
		"Plasma 4 のサポート終了",
		"2015-12-12",
		"2015-12-12",
		"Antonio Rojas"
	),
	(
		"c-abi-change",
		"C++ ABI の変更",
		"2015-12-10",
		"2015-12-10",
		"Evangelos Foutras"
	),
	(
		"xorg-1180-enters-testing",
		"Xorg 1.18.0 が [testing] に入りました",
		"2015-11-13",
		"2015-11-13",
		"Laurent Carlier"
	),
	(
		"d-bus-now-launches-user-buses",
		"D-Bus はユーザーバスを起動します",
		"2015-09-20",
		"2015-09-20",
		"Jan Steffens"
	),
	(
		"openssh-70p1-deprecates-ssh-dss-keys",
		"openssh-7.0p1 で ssh-dss 鍵が無効になります",
		"2015-08-14",
		"2015-08-14",
		"Gaetan Bisson"
	),
	(
		"new-domain",
		"archlinuxjp.org ドメインを取得しました",
		"2015-07-08",
		"2015-07-08",
		"Shohei Kusakata"
	),
	(
		"data-corruption-on-software-raid-0-when-discard-is-used",
		"discard を有効にしたときにソフトウェア RAID 0 で発生するデータ破損について",
		"2015-05-22",
		"2015-05-22",
		"Evangelos Foutras"
	),
	(
		"puppet-40-enters-community",
		"Puppet 4.0 が [community] に入りました",
		"2015-05-17",
		"2015-05-17",
		"Lukas Fleischer"
	),
	(
		"pulseaudio-split",
		"PulseAudio のパッケージ分割について",
		"2015-05-16",
		"2015-05-16",
		"Jan Steffens"
	),
	(
		"xorg-server-1171-is-now-available",
		"xorg-server 1.17.1 が来ました",
		"2015-02-15",
		"2015-02-15",
		"Laurent Carlier"
	),
	(
		"transition-of-kde-software-to-the-kde-framework-and-qt-5",
		"KDE ソフトウェアが KDE Frameworks と Qt 5 に移行",
		"2015-01-26",
		"2015-01-26",
		"Andrea Scarpino"
	),
	(
		"packaging-changes-in-lirc-092",
		"lirc 0.9.2 におけるパッケージの変更",
		"2015-01-20",
		"2015-01-20",
		"Lukas Fleischer"
	),
	(
		"ca-certificates-update",
		"ca-certificates のアップデート",
		"2014-12-11",
		"2014-12-11",
		"Jan Steffens"
	),
	(
		"gnupg-21-and-the-pacman-keyring",
		"GnuPG-2.1 と pacman のキーリング",
		"2014-12-08",
		"2014-12-08",
		"Gaetan Bisson"
	),
	(
		"changes-to-intel-microcodeupdates",
		"Intel のマイクロコードアップデートの変更",
		"2014-10-22",
		"2014-10-22",
		"Thomas Bächler"
	),
	(
		"java-users-manual-intervention-required-before-upgrade",
		"Java ユーザー: アップグレードする前に必要な操作",
		"2014-10-12",
		"2014-10-12",
		"Guillaume Alaux"
	),
	(
		"nvidia-340xx-and-nvidia",
		"nvidia-340xx と nvidia",
		"2014-10-05",
		"2014-10-05",
		"Sven-Hendrik Haase"
	),
	(
		"mesa-updated-to-1030",
		"mesa を 10.3.0 にアップデートしました",
		"2014-10-02",
		"2014-10-02",
		"Laurent Carlier"
	),
	(
		"mailinglists-maintenance",
		"メーリングリストのメンテナンス",
		"2014-09-26",
		"2014-09-26",
		"Florian Pritz"
	),
	(
		"reorganization-of-vim-packages",
		"Vim パッケージの再編成",
		"2014-08-21",
		"2014-08-21",
		"Thomas Dziedzic"
	),
	(
		"xorg-server-116-is-now-available",
		"xorg-server 1.16 が使用可能になりました",
		"2014-07-28",
		"2014-07-28",
		"Laurent Carlier"
	),
	(
		"mariadb-100-enters-extra",
		"MariaDB 10.0 が [extra] に入ります",
		"2014-07-12",
		"2014-07-12",
		"Bartłomiej Piotrowski"
	),
	(
		"bbs-wiki-and-aur-maintenance",
		"BBS, Wiki, AUR のメンテナンス",
		"2014-07-10",
		"2014-07-10",
		"Florian Pritz"
	),
	(
		"perl-updated-to-520",
		"Perl が 5.20 にアップデートされました",
		"2014-06-04",
		"2014-06-04",
		"Florian Pritz"
	),
	(
		"managing-haskell-packages-with-ghc-782",
		"GHC 7.8.2 からの Haskell パッケージの扱いについて",
		"2014-05-04",
		"2014-05-04",
		"Thomas Dziedzic"
	),
	(
		"screen-421-cannot-reattach-older-instances-either",
		"screen-4.2.1 でも古いインスタンスの再アタッチができなくなります",
		"2014-04-29",
		"2014-04-29",
		"Gaetan Bisson"
	),
	(
		"screen-420-cannot-reattach-older-instances",
		"screen-4.2.0 で古いインスタンスを再アタッチができなくなります",
		"2014-04-20",
		"2014-04-20",
		"Gaetan Bisson"
	);
