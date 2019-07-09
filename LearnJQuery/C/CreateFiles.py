# -*- coding: utf-8 -*

# 批量创建文件

import os



for i in range(200):
                                 
        fileName = ''

        if i < 10:
                fileName = '00' + str(i)
        elif i >= 10 and i < 100:
                fileName = '0' + str(i)
        else:
                fileName = str(i)

        fileName += '.html'

        if os.path.exists(fileName) is True:
                continue
        

        textFile = open(fileName,'w')

#        textFile.write('\n')

        textFile.close()
