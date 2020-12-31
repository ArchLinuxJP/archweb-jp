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
		"accessible-installation-medium",
		"アクセシビリティ機能付きインストールメディア",
		"2020-11-01",
		"2020-11-01",
		"David Runge"
	),
	(
		"libtraceevent59-1-update-requires-manual-intervention",
		"libtraceevent>=5.9-1 への更新は対応作業が必要です",
		"2020-10-23",
		"2020-10-23",
		"Sébastien Luttringer"
	),
	(
		"nvidia-45528-is-incompatible-with-linux-59",
		"nvidia 455.28 は linux >= 5.9 と互換性がありません",
		"2020-10-21",
		"2020-10-21",
		"Sven-Hendrik Haase"
	),
	(
		"ghostpcl9532-2-and-ghostxps9532-2-updates-require-manual-intervention",
		"ghostpcl>=9.53.2-2 と ghostxps>=9.53.2-2 への更新は対応作業が必要です",
		"2020-10-01",
		"2020-10-01",
		"Jan Alexander Steffens"
	),
	(
		"arch-conf-2020-schedule",
		"Arch Conf 2020 のスケジュール",
		"2020-09-23",
		"2020-09-23",
		"Morten Linderud"
	),
	(
		"kill-arch-bugs-help-us-on-the-13th-of-september",
		"Arch のバグ対処: 9月13日に手伝ってください！",
		"2020-09-09",
		"2020-09-09",
		"Frederik Schwan"
	),
	(
		"aur-migration-new-ssh-hostkeys",
		"AUR の移行: 新しい SSH ホストキー",
		"2020-07-28",
		"2020-07-28",
		"Giancarlo Razzolini"
	),
	(
		"zn_poly-092-2-update-requires-manual-intervention",
		"zn_poly 0.9.2-2 への更新は対応作業が必要です",
		"2020-04-14",
		"2020-04-14",
		"Antonio Rojas"
	),
	(
		"nss3511-1-and-lib32-nss3511-1-updates-require-manual-intervention",
		"nss>=3.51.1-1 と lib32-nss>=3.51.1-1 への更新は対応作業が必要です",
		"2020-04-13",
		"2020-04-13",
		"Jan Alexander Steffens"
	),
	(
		"hplip-3203-2-update-requires-manual-intervention",
		"hplip>=3.20.3-2 への更新は対応作業が必要です",
		"2020-03-19",
		"2020-03-19",
		"Andreas Radke"
	),
	(
		"firewalld081-2-update-requires-manual-intervention",
		"firewalld>=0.8.1-2 への更新は対応作業が必要です",
		"2020-03-01",
		"2020-03-01",
		"Jan Alexander Steffens"
	),
	(
		"the-future-of-the-arch-linux-project-leader",
		"Arch Linux プロジェクトリーダーの今後について",
		"2020-02-24",
		"2020-02-24",
		"Aaron Griffin"
	),
	(
		"planet-arch-linux-migration",
		"Planet Arch Linux の移行について",
		"2020-02-22",
		"2020-02-22",
		"Jelle van der Waa"
	),
	(
		"sshd-needs-restarting-after-upgrading-to-openssh-82p1",
		"openssh-8.2p1 への更新時は sshd の再起動が必要です",
		"2020-02-17",
		"2020-02-17",
		"Gaetan Bisson"
	),
	(
		"rsync-compatibility",
		"rsync の互換性について",
		"2020-01-15",
		"2020-01-15",
		"Christian Hesse"
	),
	(
		"now-using-zstandard-instead-of-xz-for-package-compression",
		"今後、パッケージの圧縮は xz に代わり Zstandard が利用されます",
		"2020-01-04",
		"2020-01-04",
		"Robin Broda"
	),
	(
		"xorg-cleanup-requires-manual-intervention",
		"Xorg cleanup の影響で対応作業が必要です",
		"2019-12-20",
		"2019-12-20",
		"Andreas Radke"
	),
	(
		"primus_vk13-1-update-requires-manual-intervention",
		"primus_vk 1.3-1 以降へのアップデートでは手動の作業が必要です",
		"2019-11-25",
		"2019-11-25",
		"Giancarlo Razzolini"
	),
	(
		"new-kernel-packages-and-mkinitcpio-hooks",
		"新しいカーネルパッケージと mkinitcpio フック",
		"2019-11-10",
		"2019-11-10",
		"Giancarlo Razzolini"
	),
	(
		"clarification-regarding-recent-email-activity-on-the-arch-announce-list",
		"arch-announce メーリングリストにおける最近のメールについての説明",
		"2019-10-25",
		"2019-10-25",
		"Giancarlo Razzolini"
	),
	(
		"required-update-to-recent-libarchive",
		"2018年9月以降にリリースされた libarchive へのアップデートが必要です",
		"2019-10-16",
		"2019-10-16",
		"Christian Hesse"
	),
	(
		"base-group-replaced-by-mandatory-base-package-manual-intervention-required",
		"`base` グループは必須の `base` パッケージに置き換えられました - 対応作業が必要です",
		"2019-10-06",
		"2019-10-06",
		"Robin Broda"
	),
	(
		"astyle31-2-update-requires-manual-intervention",
		"astyle 3.1-2 以降への更新は手動で作業が必要です",
		"2019-08-26",
		"2019-08-26",
		"Antonio Rojas"
	),
	(
		"tensorflow1140-5-update-requires-manual-intervention",
		"tensorflow 1.14.0-5 以降への更新は手動で作業が必要です",
		"2019-08-20",
		"2019-08-20",
		"Konstantin Gizdov"
	),
	(
		"libbloom16-2-update-requires-manual-intervention",
		"libbloom 1.6-2 以上へのアップデートは手動で作業が必要です",
		"2019-07-11",
		"2019-07-11",
		"Felix Yan"
	),
	(
		"mariadb-104x-update-requires-manual-intervention",
		"mariadb 10.4.x 以降への更新は追加で作業が必要です",
		"2019-06-27",
		"2019-06-27",
		"Christian Hesse"
	),
	(
		"libutf8proc211-3-update-requires-manual-intervention",
		"libutf8proc 2.1.1-3 以降への更新は手動での作業が必要です",
		"2018-07-14",
		"2018-07-14",
		"Antonio Rojas"
	),
	(
		"js52-5273-2-upgrade-requires-intervention",
		"js52 52.7.3-2 のアップグレードは手動での作業が必要です",
		"2018-05-04",
		"2018-05-04",
		"Jan Steffens"
	),
	(
		"glibc-227-2-and-pam-130-2-may-require-manual-intervention",
		"glibc 2.27-2 と pam 1.3.0-2 への更新は手動での作業が必要な場合があります",
		"2018-04-20",
		"2018-04-20",
		"Bartłomiej Piotrowski"
	),
	(
		"zita-resampler-160-1-2-update-requires-manual-intervention",
		"zita-resampler 1.6.0-1 から 1.6.0-2 への更新は手動での作業が必要です",
		"2018-02-22",
		"2018-02-22",
		"Antonio Rojas"
	),
	(
		"the-end-of-i686-support",
		"i686 サポートの終了について",
		"2017-11-08",
		"2017-11-08",
		"Bartłomiej Piotrowski"
	),
	(
		"new-domain-2",
		"archlinux.jp ドメインを取得しました",
		"2017-09-20",
		"2017-09-20",
		"Shohei Kusakata"
	),
	(
		"perl-library-path-change",
		"Perl ライブラリのパスが変わります",
		"2017-09-02",
		"2017-09-02",
		"Florian Pritz"
	),
	(
		"deprecation-of-abs",
		"ABS の廃止",
		"2017-05-15",
		"2017-05-15",
		"Bartłomiej Piotrowski"
	),
	(
		"ca-certificates-utils-20170307-1-upgrade-requires-manual-intervention",
		"ca-certificates-utils 20170307-1 のアップグレードでは手動の操作が必要です",
		"2017-03-15",
		"2017-03-15",
		"Jan Steffens"
	),
	(
		"mesa-with-libglvnd-support-is-now-in-testing",
		"libglvnd のサポートが有効になった mesa が testing に入りました",
		"2017-02-27",
		"2017-02-27",
		"Laurent Carlier"
	),
	(
		"phasing-out-i686-support",
		"i686 サポートの段階的廃止について",
		"2017-01-25",
		"2017-01-25",
		"Bartłomiej Piotrowski"
	),
	(
		"xorg-server-1191-is-now-in-extra",
		"xorg-server 1.19.1 は現在 extra にあります",
		"2017-01-14",
		"2017-01-14",
		"Laurent Carlier"
	),
	(
		"openvpn-240-update-requires-administrative-interaction",
		"OpenVPN 2.4.0 アップデートには管理操作が必要になります",
		"2016-12-30",
		"2016-12-30",
		"Christian Hesse"
	),
	(
		"ttf-dejavu-237-will-require-forced-upgrade",
		"ttf-dejavu 2.37 は強制的なアップグレードが必要になります",
		"2016-10-31",
		"2016-10-31",
		"Jan de Groot"
	),
	(
		"texlive-2016-packages-are-now-available",
		"TeXLive 2016 パッケージが利用可能です",
		"2016-08-07",
		"2016-08-07",
		"Rémy Oudompheng"
	),
	(
		"test-sec-flags-call-for-assistance",
		"test-sec-flags: ご協力のお願い",
		"2016-07-18",
		"2016-07-18",
		"Allan McRae"
	),
	(
		"screen-440-1-unable-to-attach-old-sessions",
		"screen-4.4.0-1 は古いバージョンのセッションにアタッチできません",
		"2016-07-02",
		"2016-07-02",
		"Gaetan Bisson"
	),
	(
		"required-update-to-pacman-501-before-2016-04-23",
		"2016年4月23日になる前に pacman-5.0.1 にアップデートしてください",
		"2016-03-25",
		"2016-03-25",
		"Allan McRae"
	),
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
	),
	(
		"linux-313-warning-ps2-keyboard-support-is-now-modular",
		"Linux 3.13 の警告: PS/2 キーボードのサポートはモジュールになりました",
		"2014-02-21",
		"2014-02-21",
		"Thomas Bächler"
	),
	(
		"deprecation-of-etcsysctlconf",
		"/etc/sysctl.conf の廃止",
		"2013-09-17",
		"2013-09-17",
		"Gaetan Bisson"
	),
	(
		"php-55-available-in-the-extra-repository",
		"PHP 5.5 が [extra] リポジトリから利用可能です",
		"2013-08-17",
		"2013-08-17",
		"Pierre Schmitz"
	),
	(
		"texlive-2013-update-may-require-user-intervention",
		"TeXLive 2013 アップデートではユーザーの操作が必要です",
		"2013-07-15",
		"2013-07-15",
		"Rémy Oudompheng"
	),
	(
		"binaries-move-to-usrbin-requiring-update-intervention",
		"バイナリが /usr/bin に移動されるにあたってアップデートが必要です",
		"2013-06-03",
		"2013-06-03",
		"Allan McRae"
	),
	(
		"netctl-is-now-in-core",
		"netctl が [core] に入りました",
		"2013-04-10",
		"2013-04-10",
		"Florian Pritz"
	),
	(
		"mariadb-replaces-mysql-in-repositories",
		"公式リポジトリの MySQL が MariaDB に置き換わります",
		"2013-03-25",
		"2013-03-25",
		"Bartłomiej Piotrowski"
	),
	(
		"final-sysvinit-deprecation-warning",
		"sysvinit の廃止の最終警告",
		"2013-02-04",
		"2013-02-04",
		"Tom Gundersen"
	),
	(
		"end-of-initscripts-support",
		"initscripts のサポートの終了",
		"2012-11-04",
		"2012-11-04",
		"Tom Gundersen"
	),
	(
		"consolekit-replaced-by-logind",
		"ConsoleKit は logind に置き換わります",
		"2012-10-30",
		"2012-10-30",
		"Allan McRae"
	),
	(
		"systemd-is-now-the-default-on-new-installations",
		"systemd が新規環境のデフォルトです",
		"2012-10-13",
		"2012-10-13",
		"Thomas Bächler"
	),
	(
		"install-medium-20121006-introduces-systemd",
		"インストールメディア 2012.10.06 から systemd が導入されます",
		"2012-10-07",
		"2012-10-07",
		"Pierre Schmitz"
	),
	(
		"fontconfig-2101-update-manual-intervention-required",
		"Fontconfig 2.10.1 のアップデートでは手動作業が必要です",
		"2012-09-06",
		"2012-09-06",
		"Andreas Radke"
	),
	(
		"pkgstats-now-collects-modules-usage",
		"pkgstats はモジュールの使用情報も収集するようになります",
		"2012-07-30",
		"2012-07-30",
		"Tom Gundersen"
	),
	(
		"install-media-20120715-released",
		"インストールメディア 2012.07.15 がリリースされました",
		"2012-07-22",
		"2012-07-22",
		"Pierre Schmitz"
	),
	(
		"grub-legacy-no-longer-supported",
		"GRUB Legacy のサポートの打ち切り",
		"2012-07-20",
		"2012-07-20",
		"Ronald van Haren"
	),
	(
		"the-lib-directory-becomes-a-symlink",
		"/lib ディレクトリはシンボリックリンクになります",
		"2012-07-14",
		"2012-07-14",
		"Allan McRae"
	),
	(
		"arch-linux-turns-10",
		"Arch Linux 10周年",
		"2012-03-12",
		"2012-03-12",
		"Dan McGee"
	),
	(
		"hostname-utility-moved-from-net-tools-to-inetutils",
		"hostname ユーティリティが net-tools から inetutils に移動しました",
		"2011-10-06",
		"2011-10-06",
		"Eric Bélanger"
	),
	(
		"changes-to-kernel-package-and-filenames",
		"カーネルパッケージとファイル名の変更",
		"2011-08-07",
		"2011-08-07",
		"Dieter Plaetinck"
	),
	(
		"deprecation-of-net-tools",
		"net-tools の廃止",
		"2011-06-08",
		"2011-06-08",
		"Tom Gundersen"
	),
	(
		"the-canterbury-project",
		"Canterbury プロジェクト",
		"2011-04-01",
		"2011-04-01",
		"Pierre Schmitz"
	),
	(
		"python-is-now-python-3",
		"デフォルトの Python は Python 3 になりました",
		"2010-10-18",
		"2010-10-18",
		"Allan McRae"
	),
	(
		"pkgstats-round-two-take-your-vote-and-help-improving-arch",
		"pkgstats ラウンドツー: 投票して Arch に貢献",
		"2010-09-24",
		"2010-09-24",
		"Pierre Schmitz"
	),
	(
		"switching-to-xz-compression-for-new-packages",
		"新しいパッケージから xz 圧縮に切り替わります",
		"2010-03-23",
		"2010-03-23",
		"Pierre Schmitz"
	),
	(
		"pkgstats-contribution-was-never-that-easy",
		"pkgstats: 一番簡単な貢献方法",
		"2008-11-06",
		"2008-11-06",
		"Pierre Schmitz"
	);
